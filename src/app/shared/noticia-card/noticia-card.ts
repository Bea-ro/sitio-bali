import { Component, Input, OnInit } from '@angular/core';
import { Noticia } from '../../models/models';

@Component({
  selector: 'app-noticia-card',
  imports: [],
  templateUrl: './noticia-card.html',
  styleUrl: './noticia-card.css',
})
export class NoticiaCard implements OnInit {
  @Input() noticia?: Noticia;
  public noticiaIntro: string = '';

  public ngOnInit() {
    if (this.noticia) {
      this.noticiaIntro = this.noticia.text.slice(0, 100);
    }
  }
}
