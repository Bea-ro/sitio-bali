import { Component } from '@angular/core';
import { NoticiaCard } from '../../shared/noticia-card/noticia-card';
import { noticias } from '../../data/noticias';
import { INoticia } from '../../models/models';

@Component({
  selector: 'app-noticias',
  imports: [NoticiaCard],
  templateUrl: './noticias.html',
  styleUrl: './noticias.css',
})
export class Noticias {
  public noticias: INoticia[] = noticias;
}
