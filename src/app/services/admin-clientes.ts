import { Injectable, signal } from '@angular/core';
import { Cliente } from '../models/models';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AdminClientesService {
  public API_URL = environment.API_URL;
  public clientes = signal<Cliente[]>([]);
  public error = signal<string | null>(null);
  public loading = signal(true);

  constructor(private http: HttpClient) {}
  public getClientes() {
    this.loading.set(true);
    this.error.set(null);
    this.http.get<Cliente[]>(`${this.API_URL}/clientes`).subscribe({
      next: (lista) => {
        this.clientes.set(lista);
        this.loading.set(false);
      },
      error: () => {
        this.error.set('No se ha podido conectar con el servidor. Inténtalo más tarde.');
        this.loading.set(false);
      },
    });
  }

  public createCliente(cliente: Cliente) {
    return this.http
      .post<Cliente>(`${this.API_URL}/clientes`, cliente, {
        headers: { 'Content-Type': 'application/json' },
      })
      .subscribe({
        next: (newCliente) => {
          this.clientes.update((clientes) => [...clientes, newCliente]);
          alert('Cliente registrado.');
        },
        error: () => {
          alert(
            'Se ha producido un error al registrar el cliente. Por favor, inténtalo más tarde.'
          );
        },
      });
  }

  public updateCliente(id: string, cliente: string) {
    return this.http
      .put<Cliente>(
        `${this.API_URL}/clientes/${id}`,
        { cliente },
        { headers: { 'Content-Type': 'application/json' } }
      )
      .subscribe({
        next: (updatedCliente) => {
          this.clientes.update((clientes) =>
            clientes.map((cliente) => (cliente._id === id ? updatedCliente : cliente))
          );

          alert('El nombre del cliente se ha actualizado.');
        },
        error: () => {
          alert(
            'Se ha producido un error al actualizar el cliente. Por favor, inténtalo más tarde.'
          );
        },
      });
  }

  public deleteCliente(id: string) {
    this.http
      .delete<Cliente>(`${this.API_URL}/clientes/${id}`, {
        headers: { 'Content-Type': 'application/json' },
      })
      .subscribe(
        (response) => {
          alert('Cliente borrado.');
          this.clientes.update((lista) => lista.filter((cliente) => cliente._id !== id));
        },
        (error) => {
          alert('Se ha producido un error al borrar el cliente. Por favor, inténtalo más tarde.');
        }
      );
  }
}
