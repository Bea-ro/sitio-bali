import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class Rss {
  public API_URL = environment.API_URL;
  public noticiasAEAT = signal<any[]>([]);

  constructor(private http: HttpClient) {}

  getNoticias() {
    return this.http.get<any[]>('http://localhost:3000/api/rss/agencia-tributaria');
  }
}
