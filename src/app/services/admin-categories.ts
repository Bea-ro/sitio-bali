import { computed, Injectable, signal } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Category } from '../models/models';

@Injectable({
  providedIn: 'root',
})
export class AdminCategories {
  public API_URL = environment.API_URL;
  public categoriesObjetcs = signal<Category[]>([]);
  public categories = computed(() =>
    Array.from(new Set(this.categoriesObjetcs().map((c) => c.category)))
  );

  constructor(private http: HttpClient) {}

  public getCategories() {
    this.http
      .get<Category[]>(`${this.API_URL}/categories`, {
        headers: { 'Content-Type': 'application/json' },
      })
      .subscribe((lista) => {
        this.categoriesObjetcs.set(lista);
      });
  }

  public createCategory(category: string) {
    return this.http
      .post(
        `${this.API_URL}/categories`,
        { category },
        {
          headers: { 'Content-Type': 'application/json' },
        }
      )
      .subscribe(
        (response) => alert('Se ha añadido la categoría.'),
        (error) =>
          alert('Se ha producido un error al añadir la categoría. Por favor, inténtalo más tarde.')
      );
  }

  public updateCategory(id: string, category: string) {
    return this.http
      .put(
        `${this.API_URL}/categories/${id}`,
        { category },
        {
          headers: { 'Content-Type': 'application/json' },
        }
      )
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
    this.http
      .delete<Category>(`${this.API_URL}/categories/${id}`, {
        headers: { 'Content-Type': 'application/json' },
      })
      .subscribe(
        (response) => {
          alert('La categoría se ha eliminado.');
          this.categoriesObjetcs.update((lista) => lista.filter((category) => category._id !== id));
        },
        (error) => {
          alert(
            'Se ha producido un error al eliminar la categoría. Por favor, inténtalo más tarde.'
          );
        }
      );
  }
}
