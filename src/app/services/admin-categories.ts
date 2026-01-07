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
  public loading = signal<boolean>(false);
  public error = signal<string | null>(null);

  constructor(private http: HttpClient) {}

  public getCategories() {
    this.loading.set(true);
    this.error.set(null);
    this.http.get<Category[]>(`${this.API_URL}/categories`).subscribe({
      next: (lista) => {
        lista.sort((a, b) => a.category.localeCompare(b.category));
        this.categories.set(lista);
        this.loading.set(false);
      },
      error: () => {
        this.error.set('No se ha podido conectar con el servidor. Inténtalo más tarde.');
        this.loading.set(false);
      },
    });
  }

  public getCategoriesUsed() {
    this.loading.set(true);
    this.error.set(null);
    this.http.get<string[]>(`${this.API_URL}/categories/used`).subscribe({
      next: (lista) => {
        const categories = [...lista];
        if (!categories.includes('laboral')) {
          categories.push('laboral');
        }
        if (!categories.includes('fiscal')) {
          categories.push('fiscal');
        }
        categories.sort((a, b) => a.localeCompare(b));
        this.categoriesUsed.set(categories);
        this.loading.set(false);
      },
      error: () => {
        this.error.set('No se ha podido conectar con el servidor. Inténtalo más tarde.');
        this.loading.set(false);
      },
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
          this.categories.update((cats) =>
            [...cats, newCategory].sort((a, b) => a.category.localeCompare(b.category))
          );
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
          alert('Se ha eliminado la categoría.');
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
