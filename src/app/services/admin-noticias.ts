import { HttpClient } from '@angular/common/http';
import { computed, Injectable, signal } from '@angular/core';
import { NoticiaEditada, NoticiaExistente, NoticiaNueva } from '../models/models';
import { environment } from '../../environments/environment';
import { catchError, finalize, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminNoticiasService {
  public API_URL = environment.API_URL;

  public noticias = signal<NoticiaExistente[]>([]);
  public loading = signal<boolean>(false);
  public error = signal<string | null>(null);
  public totalNoticias = signal<number>(0);

  constructor(private http: HttpClient) {}

  public getNoticias$() {
    this.loading.set(true);
    this.error.set(null);
    this.http.get<NoticiaExistente[]>(`${this.API_URL}/noticias/todas`).pipe(
      tap((lista) => {
        lista.sort((a, b) =>
          !a.createdAt ? 1 : !b.createdAt ? -1 : b.createdAt.localeCompare(a.createdAt)
        );
        this.noticias.set(lista);
      }),
      catchError((message: string) => {
        this.error.set(message);
        return throwError(message);
      }),
      finalize(() => this.loading.set(false))
    );
  }

  public getNoticiasPaginated$(page: number, pageSize: number, filter: string) {
    this.loading.set(true);
    this.error.set(null);
    return this.http
      .get<{ data: NoticiaExistente[]; total: number }>(`${this.API_URL}/noticias`, {
        params: { page: page.toString(), pageSize: pageSize.toString(), filter: filter },
      })
      .pipe(
        tap((lista) => {
          this.noticias.set(lista.data);
          this.totalNoticias.set(lista.total);
        }),
        catchError((message: string) => {
          this.error.set(message);
          return throwError(message);
        }),
        finalize(() => this.loading.set(false))
      );
  }
  public createNoticia$(noticia: NoticiaNueva) {
    return this.http.post<NoticiaExistente>(`${this.API_URL}/noticias`, noticia).pipe(
      tap((newNoticia) => {
        this.noticias.update((noticias) =>
          [...noticias, newNoticia].sort((a, b) =>
            !a.createdAt ? 1 : !b.createdAt ? -1 : b.createdAt.localeCompare(a.createdAt)
          )
        );
      })
    );
  }

  public updateNoticia$(id: string, noticia: NoticiaEditada) {
    return this.http.patch<NoticiaExistente>(`${this.API_URL}/noticias/${id}`, noticia).pipe(
      tap((updatedNoticia) => {
        this.noticias.update((noticias) =>
          noticias.map((noticia) => (noticia._id === id ? updatedNoticia : noticia))
        );
      }),
      catchError((message: string) => {
        this.error.set(message);
        return throwError(message);
      })
    );
  }

  public deleteNoticia$(id: string) {
    return this.http
      .delete<NoticiaExistente>(`${this.API_URL}/noticias/${id}`)
      .pipe(
        tap(() => this.noticias.update((lista) => lista.filter((noticia) => noticia._id !== id)))
      );
  }
}
