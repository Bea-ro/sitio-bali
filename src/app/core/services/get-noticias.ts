import { HttpClient } from '@angular/common/http';
import { computed, Injectable, signal } from '@angular/core';
import { INoticia } from '../../models/models';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GetNoticias {
  public API_URL = environment.API_URL;
  noticias = signal<INoticia[]>([]);
  categories = computed(() => Array.from(new Set(this.noticias().map((n) => n.category))));

  constructor(private http: HttpClient) {}

  public getNoticias() {
    this.http
      .get<INoticia[]>(`${this.API_URL}/noticias`, {
        headers: { 'Content-Type': 'application/json' },
      })
      .subscribe((lista) => {
        this.noticias.set(lista);
      });
  }

  public getNoticiasByCategory(category: string): Observable<INoticia[]> {
    return this.http.get<INoticia[]>(`${this.API_URL}/noticias/${category}`, {
      headers: { 'Content-Type': 'application/json' },
    });
  }

  public getNoticiaBySlug(slug: string): Observable<INoticia> {
    return this.http.get<INoticia>(`${this.API_URL}/noticias/${slug}`, {
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
