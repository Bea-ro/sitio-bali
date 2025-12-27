import { Component } from '@angular/core';
import { NoticiaCard } from '../../shared/noticia-card/noticia-card';
import { CommonModule } from '@angular/common';
import { GetNoticias } from '../../core/services/get-noticias';
import { FilterPipe } from '../../pipes/filter-pipe';
import { CategoriesMenu } from '../../shared/categories-menu/categories-menu';

@Component({
  selector: 'app-noticias',
  imports: [NoticiaCard, CategoriesMenu, CommonModule, FilterPipe],
  templateUrl: './noticias.html',
  styleUrl: './noticias.css',
})
export class Noticias {
  public selectedCategory?: string | undefined;
  public rss?: any[];
  constructor(public getNoticias: GetNoticias) {}

  public ngOnInit() {
    this.getNoticias.getNoticias();
    this.getNoticias.getRSS().subscribe((data) => {
      this.rss = data;
      console.log(data);
    });
  }

  public onSelectedCategoryChange(category: string) {
    this.selectedCategory = category;
  }
}
