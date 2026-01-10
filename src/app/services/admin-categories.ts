import { Injectable, signal } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Category } from '../models/models';
import { catchError, finalize, tap, throwError } from 'rxjs';

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

  public getCategories$() {
    this.loading.set(true);
    this.error.set(null);
    return this.http.get<Category[]>(`${this.API_URL}/categories`).pipe(
      tap((lista) => {
        lista.sort((a, b) => a.category.localeCompare(b.category));
        this.categories.set(lista);
      }),
      catchError((message: string) => {
        this.error.set(message);
        return throwError(() => message);
      }),
      finalize(() => this.loading.set(false))
    );
  }

  public getCategoriesUsed$() {
    this.loading.set(true);
    this.error.set(null);
    return this.http.get<string[]>(`${this.API_URL}/categories/used`).pipe(
      tap((lista) => {
        const categories = [...lista];
        if (!categories.includes('laboral')) {
          categories.push('laboral');
        }
        if (!categories.includes('fiscal')) {
          categories.push('fiscal');
        }
        categories.sort((a, b) => a.localeCompare(b));
        this.categoriesUsed.set(categories);
      }),
      catchError((message: string) => {
        this.error.set(message);
        return throwError(() => message);
      }),
      finalize(() => this.loading.set(false))
    );
  }

  public createCategory$(category: string) {
    return this.http.post<Category>(`${this.API_URL}/categories`, { category }).pipe(
      tap((newCategory) => {
        this.categories.update((categories) =>
          [...categories, newCategory].sort((a, b) => a.category.localeCompare(b.category))
        );
      }),
      catchError((message: string) => {
        this.error.set(message);
        return throwError(() => message);
      })
    );
  }

  public updateCategory$(id: string, category: string) {
    return this.http.put<Category>(`${this.API_URL}/categories/${id}`, { category }).pipe(
      tap((updatedCategory) => {
        this.categories.update((categories) =>
          categories.map((category) => (category._id === id ? updatedCategory : category))
        );
      }),
      catchError((message: string) => {
        this.error.set(message);
        return throwError(() => message);
      })
    );
  }

  public deleteCategory$(id: string) {
    return this.http
      .delete<Category>(`${this.API_URL}/categories/${id}`)
      .pipe(
        tap(() =>
          this.categories.update((lista) => lista.filter((category) => category._id !== id))
        )
      );
  }
}
