import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { INoticia } from '../../models/models';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GetNoticias {
  public API_URL = environment.API_URL;
  public noticias = signal<INoticia[]>([]);
  public categories = signal<string[]>([]);

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

  public getNoticiasByCategory(category: string) {
    this.http
      .get<INoticia[]>(`${this.API_URL}/noticias/${category}`, {
        headers: { 'Content-Type': 'application/json' },
      })
      .subscribe((lista) => {
        this.noticias.set(lista);
      });
  }

  public getNoticiaBySlug(slug: string): Observable<INoticia> {
    return this.http.get<INoticia>(`${this.API_URL}/noticias/${slug}`, {
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
