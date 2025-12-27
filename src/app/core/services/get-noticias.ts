import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { NoticiaExistente } from '../../models/models';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GetNoticias {
  public API_URL = environment.API_URL;
  public noticias = signal<NoticiaExistente[]>([]);
  public categories = signal<string[]>([]);
  public loading = signal<boolean>(true);
  public error = signal<string | null>(null);

  constructor(private http: HttpClient) {}

  public getNoticias() {
    this.loading.set(true);
    this.error.set(null);
    this.http.get<NoticiaExistente[]>(`${this.API_URL}/noticias`).subscribe({
      next: (lista) => {
        lista.sort((a, b) =>
          !a.createdAt ? 1 : !b.createdAt ? -1 : b.createdAt.localeCompare(a.createdAt)
        );
        this.noticias.set(lista);
        this.loading.set(false);
      },
      error: () => {
        this.error.set('No se ha podido conectar con el servidor. Inténtalo más tarde.');
        this.loading.set(false);
      },
    });
  }

  public getRSS() {
    return this.http.get<any[]>(`${this.API_URL}/noticias/rss/aeat`);
  }

  public getNoticiasByCategory(category: string) {
    this.http.get<NoticiaExistente[]>(`${this.API_URL}/noticias/${category}`).subscribe({
      next: (lista) => {
        lista.sort((a, b) =>
          !a.createdAt ? 1 : !b.createdAt ? -1 : b.createdAt.localeCompare(a.createdAt)
        );
        this.noticias.set(lista);
        this.loading.set(false);
      },
      error: () => {
        this.error.set('No se ha podido conectar con el servidor. Inténtalo más tarde.');
        this.loading.set(false);
      },
    });
  }

  public getNoticiaBySlug(slug: string): Observable<NoticiaExistente> {
    return this.http.get<NoticiaExistente>(`${this.API_URL}/noticias/slug/${slug}`);
  }

  public getNoticiaById(id: string): Observable<NoticiaExistente> {
    return this.http.get<NoticiaExistente>(`${this.API_URL}/noticias/id/${id}`);
  }
}
