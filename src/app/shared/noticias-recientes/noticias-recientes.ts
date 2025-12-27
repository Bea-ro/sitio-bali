import { Component, OnInit } from '@angular/core';
import { NoticiaCard } from '../noticia-card/noticia-card';
import { GetNoticias } from '../../core/services/get-noticias';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-noticias-recientes',
  imports: [NoticiaCard, CommonModule],
  templateUrl: './noticias-recientes.html',
  styleUrl: './noticias-recientes.css',
})
export class NoticiasRecientes implements OnInit {
  constructor(public getNoticias: GetNoticias) {}

  public ngOnInit() {
    this.getNoticias.getNoticias();
  }
}
