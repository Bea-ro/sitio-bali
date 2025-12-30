import { computed, Injectable, signal } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Folder } from '../models/models';

@Injectable({
  providedIn: 'root',
})
export class AdminDocuments {
  public API_URL = environment.API_URL;
  public folders = signal<Folder[]>([]);
  public error = signal<string | null>(null);
  public loading = signal(true);

  public yearFolders = computed(() => this.folders().filter((f) => f.name !== 'Permanentes'));

  public permanenteFolder = computed<Folder | null>(
    () => this.folders().find((f) => f.name === 'Permanentes') ?? null
  );

  constructor(private http: HttpClient) {}

  public getDocuments(id: string) {
    this.loading.set(true);
    this.error.set(null);
    this.http.get<Folder[]>(`${this.API_URL}/clientes/${id}`).subscribe({
      next: (lista) => {
        this.folders.set(lista);
        this.loading.set(false);
      },
      error: () => {
        this.error.set('No se ha podido conectar con el servidor. Inténtalo más tarde.');
        this.loading.set(false);
      },
    });
  }
}
