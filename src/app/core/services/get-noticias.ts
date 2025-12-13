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

  constructor(private http: HttpClient) {}

  public getNoticias() {
    this.http
      .get<NoticiaExistente[]>(`${this.API_URL}/noticias`, {
        headers: { 'Content-Type': 'application/json' },
      })
      .subscribe((lista) => {
        lista.sort((a, b) =>
          !a.createdAt ? 1 : !b.createdAt ? -1 : b.createdAt.localeCompare(a.createdAt)
        );
        this.noticias.set(lista);
      });
  }

  public getNoticiasByCategory(category: string) {
    this.http
      .get<NoticiaExistente[]>(`${this.API_URL}/noticias/${category}`, {
        headers: { 'Content-Type': 'application/json' },
      })
      .subscribe((lista) => {
        this.noticias.set(lista);
      });
  }

  public getNoticiaBySlug(slug: string): Observable<NoticiaExistente> {
    return this.http.get<NoticiaExistente>(`${this.API_URL}/noticias/slug/${slug}`, {
      headers: { 'Content-Type': 'application/json' },
    });
  }

  public getNoticiaById(id: string): Observable<NoticiaExistente> {
    return this.http.get<NoticiaExistente>(`${this.API_URL}/noticias/id/${id}`, {
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
