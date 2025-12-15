import { Injectable, signal } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Category } from '../models/models';

@Injectable({
  providedIn: 'root',
})
export class AdminCategories {
  public API_URL = environment.API_URL;
  public categories = signal<Category[]>([]);
  public categoriesUsed = signal<string[]>([]);

  constructor(private http: HttpClient) {}

  public getCategories() {
    this.http
      .get<Category[]>(`${this.API_URL}/categories`, {
        headers: { 'Content-Type': 'application/json' },
      })
      .subscribe((lista) => {
        lista.sort((a, b) =>
          !a.createdAt ? 1 : !b.createdAt ? -1 : b.createdAt.localeCompare(a.createdAt)
        );
        this.categories.set(lista);
      });
  }

  public getCategoriesUsed() {
    this.http
      .get<string[]>(`${this.API_URL}/categories/used`, {
        headers: { 'Content-Type': 'application/json' },
      })
      .subscribe((lista) => {
        this.categoriesUsed.set(lista.sort());
      });
  }

  public createCategory(category: string) {
    return this.http
      .post<Category>(
        `${this.API_URL}/categories`,
        { category },
        {
          headers: { 'Content-Type': 'application/json' },
        }
      )
      .subscribe({
        next: (newCategory) => {
          this.categories.update((cats) => [...cats, newCategory]);
          alert('Se ha añadido la categoría.');
        },
        error: () => {
          alert('Se ha producido un error al añadir la categoría. Por favor, inténtalo más tarde.');
        },
      });
  }

  public updateCategory(id: string, category: string) {
    return this.http
      .put<Category>(
        `${this.API_URL}/categories/${id}`,
        { category },
        {
          headers: { 'Content-Type': 'application/json' },
        }
      )
      .subscribe({
        next: (updatedCategory) => {
          this.categories.update((cats) =>
            cats.map((cat) => (cat._id === id ? updatedCategory : cat))
          );

          alert('El nombre de la categoría se ha actualizado.');
        },
        error: () => {
          alert(
            'Se ha producido un error al actualizar el nombre de la categoría. Por favor, inténtalo más tarde.'
          );
        },
      });
  }

  public deleteCategory(id: string) {
    this.http
      .delete<Category>(`${this.API_URL}/categories/${id}`, {
        headers: { 'Content-Type': 'application/json' },
      })
      .subscribe(
        (response) => {
          alert('La categoría se ha eliminado.');
          this.categories.update((lista) => lista.filter((category) => category._id !== id));
        },
        (error) => {
          alert(
            'Se ha producido un error al eliminar la categoría. Por favor, inténtalo más tarde.'
          );
        }
      );
  }
}
