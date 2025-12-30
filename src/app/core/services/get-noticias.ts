import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { INoticia, NoticiaExistente, NoticiaRss } from '../../models/models';
import { forkJoin, map, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GetNoticias {
  public API_URL = environment.API_URL;
  public noticias = signal<INoticia[]>([]);
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
    this.loading.set(true);
    this.error.set(null);
    const apiNoticias$ = this.http.get<NoticiaExistente[]>(`${this.API_URL}/noticias`).pipe(
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
    forkJoin([apiNoticias$, ssRss$, aeatRss$]).subscribe({
      next: ([apiNoticias, ss, aeat]) => {
        const merged = [...apiNoticias, ...ss, ...aeat].sort((a, b) => b.timestamp - a.timestamp);
        this.noticias.set(merged);
        this.loading.set(false);
      },
      error: () => {
        this.error.set('No se han podido cargar las noticias. Inténtalo más tarde.');
        this.loading.set(false);
      },
    });
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
