import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { INoticia } from '../models/models';

@Injectable({
  providedIn: 'root',
})
export class AdminNoticias {
  //public API_URL = environment.API_URL;
  public API_URL = 'http://localhost:3001/api/';

  constructor(private http: HttpClient) {}

  public createNoticia(noticia: INoticia) {
    console.log('esto en el servicio', noticia);
    return this.http
      .post(`${this.API_URL}noticias`, noticia, {
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
      .put(`${this.API_URL}noticias/${id}`, noticia, {
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
    return this.http
      .delete<INoticia[]>(`${this.API_URL}noticias/${id}`, {
        headers: { 'Content-Type': 'application/json' },
      })
      .subscribe(
        (response) => {
          alert('La noticia se ha eliminado correctamente.');
        },
        (error) => {
          alert('Se ha producido un error al eliminar la noticia. Por favor, inténtalo más tarde.');
        }
      );
  }
}
