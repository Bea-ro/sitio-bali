import { Injectable, signal } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Documento } from '../models/models';

@Injectable({
  providedIn: 'root',
})
export class AdminDocuments {
  public API_URL = environment.API_URL;
  public documents = signal<Documento[]>([]);

  constructor(private http: HttpClient) {}

  public getDocuments(cliente: string) {
    this.http.get<Documento[]>(`${this.API_URL}/clientes/${cliente}`).subscribe((lista) => {
      this.documents.set(lista);
    });
  }
}
