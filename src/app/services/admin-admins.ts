import { Injectable, signal } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Admin, AdminLoginResponse, UserDataLogin } from '../models/models';
import { jwtDecode, JwtPayload } from 'jwt-decode';
@Injectable({
  providedIn: 'root',
})
export class AdminAdmins {
  public API_URL = environment.API_URL;
  public admins = signal<Admin[]>([]);
  public error = signal<string | null>(null);
  public loading = signal(true);

  constructor(private http: HttpClient) {}
  public getAdmins() {
    this.loading.set(true);
    this.error.set(null);
    this.http.get<Admin[]>(`${this.API_URL}/admins`).subscribe({
      next: (lista) => {
        lista.sort((a, b) =>
          !a.createdAt ? 1 : !b.createdAt ? -1 : b.createdAt.localeCompare(a.createdAt)
        );
        this.admins.set(lista);
        this.loading.set(false);
      },
      error: () => {
        this.error.set('No se ha podido conectar con el servidor. Inténtalo más tarde.');
        this.loading.set(false);
      },
    });
  }

  public registerAdmin(admin: Admin) {
    return this.http
      .post<Admin>(`${this.API_URL}/admins/registro`, admin, {
        headers: { 'Content-Type': 'application/json' },
      })
      .subscribe({
        next: (newAdmin) => {
          console.log(newAdmin);
          this.admins.update((admins) => [...admins, newAdmin]);
          alert('Usuario registrado. Se le ha enviado un email de activación.');
        },
        error: (err) => {
          alert(err.error.message);
        },
      });
  }

  public loginAdmin(admin: UserDataLogin) {
    return this.http.post<AdminLoginResponse>(`${this.API_URL}/admins/login`, admin);
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

  public deregisterAdmin(id: string) {
    this.http
      .delete<Admin>(`${this.API_URL}/admins/${id}`, {
        headers: { 'Content-Type': 'application/json' },
      })
      .subscribe(
        (response) => {
          alert('Administrador eliminado.');
          this.admins.update((lista) => lista.filter((admin) => admin._id !== id));
        },
        (error) => {
          alert(
            'Se ha producido un error al eliminar el administrador. Por favor, inténtalo más tarde.'
          );
        }
      );
  }
}
