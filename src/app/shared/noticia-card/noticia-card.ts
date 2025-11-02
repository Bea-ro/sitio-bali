import { Component, Input, OnInit } from '@angular/core';
import { INoticia } from '../../models/models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-noticia-card',
  imports: [],
  templateUrl: './noticia-card.html',
  styleUrl: './noticia-card.css',
})
export class NoticiaCard implements OnInit {
  @Input() noticia?: INoticia;
  public noticiaIntro: string = '';

  constructor(private router: Router) {}

  public ngOnInit() {
    if (this.noticia) {
      this.noticiaIntro = this.noticia.text.slice(0, 100);
    }
  }

  public selectNoticia(slug: string) {
    this.router.navigateByUrl(`/${slug}`);
  }
}
