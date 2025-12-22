import { Injectable, signal } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Admin, AdminDataLogin, AdminLoginResponse } from '../models/models';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AdminAdmins {
  public API_URL = environment.API_URL;
  public admins = signal<Admin[]>([]);
  public error = signal<string | null>(null);
  public loading = signal(true);

  constructor(private http: HttpClient, private router: Router) {}
  public getAdmins() {
    this.loading.set(true);
    this.error.set(null);
    this.http.get<Admin[]>(`${this.API_URL}/admins`).subscribe({
      next: (lista) => {
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
    console.log(admin);
    return this.http
      .post<Admin>(`${this.API_URL}/admins/registro`, admin, {
        headers: { 'Content-Type': 'application/json' },
      })
      .subscribe({
        next: (newAdmin) => {
          this.admins.update((admins) => [...admins, newAdmin]);
          alert('Administrador registrado.');
        },
        error: () => {
          alert(
            'Se ha producido un error al registrar el administrador. Por favor, inténtalo más tarde.'
          );
        },
      });
  }

  public loginAdmin(admin: AdminDataLogin) {
    return this.http.post<AdminLoginResponse>(`${this.API_URL}/admins/login`, admin);
  }

  //ver si esto va en el servicio o componente
  public isAuthenticated(): boolean {
    return !!localStorage.getItem('adminStored');
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
          alert('Se ha producido un error al eliminar el cliente. Por favor, inténtalo más tarde.');
        }
      );
  }
}
