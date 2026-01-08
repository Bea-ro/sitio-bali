import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { INoticia, NoticiaExistente, NoticiaRss } from '../../models/models';
import { catchError, finalize, forkJoin, map, Observable, tap, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GetNoticias {
  public API_URL = environment.API_URL;

  public noticias = signal<INoticia[]>([]);
  public categories = signal<string[]>([]);
  public loading = signal<boolean>(false);
  public error = signal<string | null>(null);

  constructor(private http: HttpClient) {}

  public getNoticias$() {
    this.loading.set(true);
    this.error.set(null);
    return this.http.get<NoticiaExistente[]>(`${this.API_URL}/noticias/todas`).pipe(
      tap((lista) => {
        lista.sort((a, b) =>
          !a.createdAt ? 1 : !b.createdAt ? -1 : b.createdAt.localeCompare(a.createdAt)
        );
        this.noticias.set(lista);
      }),
      catchError((message: string) => {
        this.error.set(message);
        return throwError(() => message);
      }),
      finalize(() => this.loading.set(false))
    );
  }

  public getRSS$() {
    this.loading.set(true);
    this.error.set(null);
    const apiNoticias$ = this.http.get<NoticiaExistente[]>(`${this.API_URL}/noticias/todas`).pipe(
      map((noticias) =>
        noticias.map((noticia) => ({
          ...noticia,
          timestamp: new Date(noticia.createdAt).getTime(),
        }))
      )
    );
    const ssRss$ = this.http.get<NoticiaRss[]>(`${this.API_URL}/noticias/rss/ss`).pipe(
      map((noticias) =>
        noticias.map((n) => ({
          ...n,
          createdAt: new Date(n.pubDate.replace('CEST', '+0200')).toISOString(),
          timestamp: new Date(n.pubDate.replace('CEST', '+0200')).getTime(),
          type: 'rss' as const,
          category: 'laboral',
          text: n.title.slice(0, 100),
          _id: crypto.randomUUID(),
          slug: '',
        }))
      )
    );
    const aeatRss$ = this.http.get<NoticiaRss[]>(`${this.API_URL}/noticias/rss/aeat`).pipe(
      map((noticias) =>
        noticias.map((n) => ({
          ...n,
          createdAt: new Date(n.pubDate.replace('CEST', '+0200')).toISOString(),
          timestamp: new Date(n.pubDate.replace('CEST', '+0200')).getTime(),
          type: 'rss' as const,
          category: 'fiscal',
          text: n.title.slice(0, 100),
          _id: crypto.randomUUID(),
          slug: '',
        }))
      )
    );
    return forkJoin([apiNoticias$, ssRss$, aeatRss$]).pipe(
      tap(([apiNoticias, ss, aeat]) => {
        const merged = [...apiNoticias, ...ss, ...aeat].sort((a, b) => b.timestamp - a.timestamp);
        this.noticias.set(merged);
      }),
      catchError((message: string) => {
        this.error.set(message);
        return throwError(() => message);
      }),
      finalize(() => this.loading.set(false))
    );
  }

  public getNoticiasByCategory$(category: string) {
    this.http.get<NoticiaExistente[]>(`${this.API_URL}/noticias/${category}`).pipe(
      tap((lista) => {
        lista.sort((a, b) =>
          !a.createdAt ? 1 : !b.createdAt ? -1 : b.createdAt.localeCompare(a.createdAt)
        );
        this.noticias.set(lista);
      }),
      catchError((message: string) => {
        this.error.set(message);
        return throwError(() => message);
      }),
      finalize(() => this.loading.set(false))
    );
  }

  public getNoticiaBySlug(slug: string): Observable<NoticiaExistente> {
    return this.http.get<NoticiaExistente>(`${this.API_URL}/noticias/slug/${slug}`);
  }

  public getNoticiaById(id: string): Observable<NoticiaExistente> {
    return this.http.get<NoticiaExistente>(`${this.API_URL}/noticias/id/${id}`);
  }
}
