import { Injectable, signal } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Admin, UserDataLogin, UserLoginResponse } from '../models/models';
import { jwtDecode, JwtPayload } from 'jwt-decode';
import { catchError, finalize, tap, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AdminAdmins {
  public API_URL = environment.API_URL;

  public admins = signal<Admin[]>([]);
  public error = signal<string | null>(null);
  public loading = signal(false);

  constructor(private http: HttpClient) {}
  public getAdmins$() {
    this.loading.set(true);
    this.error.set(null);
    return this.http.get<Admin[]>(`${this.API_URL}/admins`).pipe(
      tap((lista) => {
        lista.sort((a, b) =>
          !a.createdAt ? 1 : !b.createdAt ? -1 : b.createdAt.localeCompare(a.createdAt)
        );
        this.admins.set(lista);
      }),
      catchError((message: string) => {
        this.error.set(message);
        return throwError(() => message);
      }),
      finalize(() => this.loading.set(false))
    );
  }

  public registerAdmin$(admin: Admin) {
    return this.http
      .post<Admin>(`${this.API_URL}/admins/registro`, admin)
      .pipe(tap((newAdmin) => this.admins.update((admins) => [...admins, newAdmin])));
  }

  public loginAdmin(admin: UserDataLogin) {
    return this.http.post<UserLoginResponse>(`${this.API_URL}/admins/login`, admin);
  }

  public isAuthenticated(): boolean {
    const stored = localStorage.getItem('userStored');
    if (!stored) return false;
    try {
      const token = JSON.parse(stored).token;
      const decoded = jwtDecode<JwtPayload>(token);
      const now = Math.floor(Date.now() / 1000);
      if (decoded.exp && decoded.exp < now) {
        localStorage.removeItem('userStored');
        return false;
      }
      return true;
    } catch {
      localStorage.removeItem('userStored');
      return false;
    }
  }

  public deregisterAdmin$(id: string) {
    return this.http
      .delete<Admin>(`${this.API_URL}/admins/${id}`)
      .pipe(tap(() => this.admins.update((lista) => lista.filter((admin) => admin._id !== id))));
  }
}
