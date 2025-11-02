import { Component } from '@angular/core';
import { INoticia } from '../../models/models';
import { noticias } from '../../data/noticias';
import { NoticiaCard } from '../noticia-card/noticia-card';

@Component({
  selector: 'app-noticias-recientes',
  imports: [NoticiaCard],
  templateUrl: './noticias-recientes.html',
  styleUrl: './noticias-recientes.css',
})
export class NoticiasRecientes {
  public noticias: INoticia[] = noticias.slice(0, 3);
}
