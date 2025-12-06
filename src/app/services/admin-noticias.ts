import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { INoticia } from '../models/models';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AdminNoticias {
  public API_URL = environment.API_URL;
  noticias = signal<INoticia[]>([]);

  constructor(private http: HttpClient) {}

  public createNoticia(noticia: INoticia) {
    console.log('esto en el servicio', noticia);
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

  public updateNoticia(id: string, noticia: INoticia) {
    return this.http
      .put(`${this.API_URL}/noticias/${id}`, noticia, {
        headers: { 'Content-Type': 'application/json' },
      })
      .subscribe(
        (response) => {
          alert('La noticia se ha actualizado correctamente.');
        },
        (error) => {
          alert(
            'Se ha producido un error al actualizar la noticia. Por favor, inténtalo más tarde.'
          );
        }
      );
  }

  public deleteNoticia(id: string) {
    this.http
      .delete<INoticia[]>(`${this.API_URL}/noticias/${id}`, {
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
