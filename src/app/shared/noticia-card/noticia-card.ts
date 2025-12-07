import { Component, Input, OnInit } from '@angular/core';
import { INoticia } from '../../models/models';
import { Router, RouterLink } from '@angular/router';
import { arrowPath } from '../../data/icon-paths';

@Component({
  selector: 'app-noticia-card',
  imports: [RouterLink],
  templateUrl: './noticia-card.html',
  styleUrl: './noticia-card.css',
})
export class NoticiaCard implements OnInit {
  @Input() noticia?: INoticia;
  public noticiaIntro: string = '';
  public arrowPath: string = arrowPath;

  constructor(private router: Router) {}

  public ngOnInit() {
    if (this.noticia) {
      this.noticiaIntro = this.noticia.text.slice(0, 100);
    }
  }
}
