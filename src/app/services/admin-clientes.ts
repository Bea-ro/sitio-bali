import { Injectable, signal } from '@angular/core';
import { Cliente, UserDataLogin, UserLoginResponse } from '../models/models';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { jwtDecode, JwtPayload } from 'jwt-decode';
import { catchError, finalize, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminClientesService {
  public API_URL = environment.API_URL;

  public clientes = signal<Cliente[]>([]);
  public error = signal<string | null>(null);
  public loading = signal(false);
  public totalClientes = signal<number>(0);

  constructor(private http: HttpClient) {}
  public getClientes$() {
    this.loading.set(true);
    this.error.set(null);
    return this.http.get<Cliente[]>(`${this.API_URL}/clientes/todos`).pipe(
      tap((lista) => {
        this.clientes.set(lista);
      }),
      catchError((message: string) => {
        this.error.set(message);
        return throwError(message);
      }),
      finalize(() => this.loading.set(false))
    );
  }

  public getClientesPaginated$(page: number, pageSize: number, filter: string) {
    this.loading.set(true);
    this.error.set(null);
    return this.http
      .get<{ data: Cliente[]; total: number }>(`${this.API_URL}/clientes`, {
        params: { page: page.toString(), pageSize: pageSize.toString(), filter: filter },
      })
      .pipe(
        tap((lista) => {
          this.clientes.set(lista.data);
          this.totalClientes.set(lista.total);
        }),
        catchError((message: string) => {
          this.error.set(message);
          return throwError(message);
        }),
        finalize(() => this.loading.set(false))
      );
  }

  public registerCliente$(cliente: Cliente) {
    return this.http
      .post<Cliente>(`${this.API_URL}/clientes/registro`, cliente)
      .pipe(tap((newCliente) => this.clientes.update((clientes) => [...clientes, newCliente])));
  }

  public updateCliente$(id: string, cliente: string) {
    return this.http.put<Cliente>(`${this.API_URL}/clientes/${id}`, { cliente }).pipe(
      tap((updatedCliente) => {
        this.clientes.update((clientes) =>
          clientes.map((cliente) => (cliente._id === id ? updatedCliente : cliente))
        );
      }),
      catchError((message: string) => {
        this.error.set(message);
        return throwError(message);
      })
    );
  }

  public loginCliente(cliente: UserDataLogin) {
    return this.http.post<UserLoginResponse>(`${this.API_URL}/clientes/login`, cliente);
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

  public deregisterCliente$(id: string) {
    return this.http
      .delete<Cliente>(`${this.API_URL}/clientes/${id}`)
      .pipe(
        tap((lista) =>
          this.clientes.update((lista) => lista.filter((cliente) => cliente._id !== id))
        )
      );
  }
}
