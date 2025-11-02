import { Component, OnInit } from '@angular/core';
import { INoticia } from '../../models/models';
import { ActivatedRoute } from '@angular/router';
import { GetNoticia } from '../../services/get-noticia';
import { NoticiasRecientes } from '../../shared/noticias-recientes/noticias-recientes';

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
    id: '',
    slug: '',
  };

  constructor(private route: ActivatedRoute, private getNoticiaService: GetNoticia) {}

  public ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const noticiaSlug = params.get('slug') ?? '';
      console.log(noticiaSlug);
      this.getNoticiaService.getNoticiaBySlug(noticiaSlug).subscribe((noticia) => {
        this.noticiadData = noticia;
      });
    });
  }
}
