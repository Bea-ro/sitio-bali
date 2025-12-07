import { Component, OnInit } from '@angular/core';
import { INoticia } from '../../models/models';
import { ActivatedRoute } from '@angular/router';
import { NoticiasRecientes } from '../../shared/noticias-recientes/noticias-recientes';
import { GetNoticias } from '../../core/services/get-noticias';
import { Pdf } from '../../core/services/pdf';
import { downloadPath } from '../../data/icon-paths';

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
  public selectedCategory: string = '';
  public downloadPath: string = downloadPath;

  constructor(private route: ActivatedRoute, private getNoticias: GetNoticias, private pdf: Pdf) {}

  public ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const noticiaSlug = params.get('slug') ?? '';
      this.getNoticias.getNoticiaBySlug(noticiaSlug).subscribe((noticia) => {
        this.noticiadData = noticia;
      });
    });
  }

  public onSelectedCategoryChange(category: string) {
    this.selectedCategory = category;
  }

  public downloadPdf() {
    const title = this.noticiadData.title;
    const content = this.noticiadData.text;
    this.pdf.generatePdf(title, content);
  }
}
