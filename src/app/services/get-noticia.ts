import { Injectable } from '@angular/core';
import { INoticia } from '../models/models';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GetNoticia {
  // public API_URL = environment.API_URL || '';
  public API_URL = '';

  constructor(private http: HttpClient) {}

  public getNoticias(): Observable<INoticia[]> {
    return this.http.get<INoticia[]>(`${this.API_URL}noticias`, {
      headers: { 'Content-Type': 'application/json' },
    });
  }
  public getNoticiaBySlug(slug: string): Observable<INoticia> {
    return this.http.get<INoticia>(`${this.API_URL}noticias/${slug}`, {
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
