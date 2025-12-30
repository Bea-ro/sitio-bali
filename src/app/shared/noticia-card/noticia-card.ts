import { Component, Input, OnInit } from '@angular/core';
import { INoticia } from '../../models/models';
import { Router, RouterLink } from '@angular/router';
import { arrowPath } from '../../data/icon-paths';
import { DatePipe } from '../../pipes/date-pipe';

@Component({
  selector: 'app-noticia-card',
  imports: [RouterLink, DatePipe],
  templateUrl: './noticia-card.html',
  styleUrl: './noticia-card.css',
})
export class NoticiaCard implements OnInit {
  @Input() noticia?: INoticia;
  public noticiaIntro: string = '';
  public arrowPath: string = arrowPath;

  constructor(public router: Router) {}

  public ngOnInit() {
    if (this.noticia) {
      this.noticiaIntro = this.noticia.text.split(' ').slice(0, 10).join(' ');
    }
  }
}
