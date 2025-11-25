import { Component } from '@angular/core';
import { INoticia } from '../../models/models';
import { NoticiaCard } from '../noticia-card/noticia-card';
import { GetNoticias } from '../../core/services/get-noticias';
import { map, Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-noticias-recientes',
  imports: [NoticiaCard, CommonModule],
  templateUrl: './noticias-recientes.html',
  styleUrl: './noticias-recientes.css',
})
export class NoticiasRecientes {
  public noticias$?: Observable<INoticia[]>;

  constructor(private getNoticias: GetNoticias) {}

  public ngOnInit() {
    this.noticias$ = this.getNoticias.getNoticias().pipe(map((noticias) => noticias.slice(0, 3)));
  }
}
