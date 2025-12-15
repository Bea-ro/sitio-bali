import { Component } from '@angular/core';
import { NoticiaCard } from '../../shared/noticia-card/noticia-card';
import { CommonModule } from '@angular/common';
import { GetNoticias } from '../../core/services/get-noticias';
import { FilterPipe } from '../../pipes/filter-pipe';
import { CategoriesMenu } from '../../shared/categories-menu/categories-menu';
import { ReferenceLinks } from './components/reference-links/reference-links';

@Component({
  selector: 'app-noticias',
  imports: [NoticiaCard, CategoriesMenu, CommonModule, FilterPipe, ReferenceLinks],
  templateUrl: './noticias.html',
  styleUrl: './noticias.css',
})
export class Noticias {
  public selectedCategory?: string | undefined;

  constructor(public getNoticias: GetNoticias) {}

  public ngOnInit() {
    this.getNoticias.getNoticias();
  }

  public onSelectedCategoryChange(category: string) {
    this.selectedCategory = category;
  }
}
