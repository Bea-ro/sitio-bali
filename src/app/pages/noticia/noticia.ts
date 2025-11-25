import { Component, OnInit } from '@angular/core';
import { INoticia } from '../../models/models';
import { ActivatedRoute } from '@angular/router';
import { NoticiasRecientes } from '../../shared/noticias-recientes/noticias-recientes';
import { GetNoticias } from '../../core/services/get-noticias';

@Component({
  selector: 'app-noticia',
  imports: [NoticiasRecientes],
  templateUrl: './noticia.html',
  styleUrl: './noticia.css',
})
export class Noticia implements OnInit {
  public noticiadData: INoticia = {
    title: '',
    date: '',
    text: '',
    category: '',
    _id: '',
    slug: '',
  };

  constructor(private route: ActivatedRoute, private getNoticias: GetNoticias) {}

  public ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const noticiaSlug = params.get('slug') ?? '';
      console.log(noticiaSlug);
      this.getNoticias.getNoticiaBySlug(noticiaSlug).subscribe((noticia) => {
        this.noticiadData = noticia;
      });
    });
  }
}
