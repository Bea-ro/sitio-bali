import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { NoticiaEditada, NoticiaExistente, NoticiaNueva } from '../models/models';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AdminNoticiasService {
  public API_URL = environment.API_URL;
  noticias = signal<NoticiaExistente[]>([]);
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

  public createNoticia(noticia: NoticiaNueva) {
    return this.http
      .post(`${this.API_URL}/noticias`, noticia, {
        headers: { 'Content-Type': 'application/json' },
      })
      .subscribe(
        (response) => {
          alert('La noticia se ha publicado correctamente.');
        },
        (error) => {
          alert('Se ha producido un error al publicar la noticia. Por favor, inténtalo más tarde.');
        }
      );
  }

  public updateNoticia(id: string, noticia: NoticiaEditada | NoticiaNueva) {
    return this.http
      .patch(`${this.API_URL}/noticias/${id}`, noticia, {
        headers: { 'Content-Type': 'application/json' },
      })
      .subscribe(
        (response) => {
          alert('La noticia se ha actualizado correctamente.');
        },
        (error) => {
          console.log(error);
          alert(
            'Se ha producido un error al actualizar la noticia. Por favor, inténtalo más tarde.'
          );
        }
      );
  }

  public deleteNoticia(id: string) {
    this.http
      .delete<NoticiaExistente>(`${this.API_URL}/noticias/${id}`, {
        headers: { 'Content-Type': 'application/json' },
      })
      .subscribe(
        (response) => {
          alert('La noticia se ha eliminado correctamente.');
          this.noticias.update((lista) => lista.filter((noticia) => noticia._id !== id));
        },
        (error) => {
          alert('Se ha producido un error al eliminar la noticia. Por favor, inténtalo más tarde.');
        }
      );
  }
}
