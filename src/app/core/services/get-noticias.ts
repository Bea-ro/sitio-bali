import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { INoticia } from '../../models/models';
import { Observable, map } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GetNoticias {
  public API_URL = environment.API_URL;

  constructor(private http: HttpClient) {}

  public getNoticias(): Observable<INoticia[]> {
    return this.http.get<INoticia[]>(`${this.API_URL}/noticias`, {
      headers: { 'Content-Type': 'application/json' },
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

  public getCategories(): Observable<string[]> {
    return this.getNoticias().pipe(
      map((noticias) => Array.from(new Set(noticias.map((n) => n.category))))
    );
  }
}
