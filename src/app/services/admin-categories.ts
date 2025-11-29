import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AdminCategories {
  public API_URL = environment.API_URL;

  constructor(private http: HttpClient) {}

  public createCategory(Category: string) {
    return this.http
      .post(`${this.API_URL}Categories`, Category, {
        headers: { 'Content-Type': 'application/json' },
      })
      .subscribe(
        (response) => {
          alert('Se ha añadido la categoría.');
        },
        (error) => {
          alert('Se ha producido un error al añadir la categoría. Por favor, inténtalo más tarde.');
        }
      );
  }

  public updateCategory(id: string, Category: string) {
    return this.http
      .put(`${this.API_URL}Categories/${id}`, Category, {
        headers: { 'Content-Type': 'application/json' },
      })
      .subscribe(
        (response) => {
          alert('El nombre de la categoría se ha actualizado.');
        },
        (error) => {
          alert(
            'Se ha producido un error al actualizar el nombre de la categoría. Por favor, inténtalo más tarde.'
          );
        }
      );
  }

  public deleteCategory(id: string) {
    return this.http
      .delete(`${this.API_URL}Categories/${id}`, {
        headers: { 'Content-Type': 'application/json' },
      })
      .subscribe(
        (response) => {
          alert('La categoría se ha eliminado.');
        },
        (error) => {
          alert(
            'Se ha producido un error al eliminar la categoría. Por favor, inténtalo más tarde.'
          );
        }
      );
  }
}
