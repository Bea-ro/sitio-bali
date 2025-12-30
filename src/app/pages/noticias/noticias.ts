import { Component, OnInit } from '@angular/core';
import { NoticiaCard } from '../../shared/noticia-card/noticia-card';
import { CommonModule } from '@angular/common';
import { GetNoticias } from '../../core/services/get-noticias';
import { FilterPipe } from '../../pipes/filter-pipe';
import { CategoriesMenu } from '../../shared/categories-menu/categories-menu';
import { AdminNoticiasService } from '../../services/admin-noticias';

@Component({
  selector: 'app-noticias',
  imports: [NoticiaCard, CategoriesMenu, CommonModule, FilterPipe],
  templateUrl: './noticias.html',
  styleUrl: './noticias.css',
})
export class Noticias implements OnInit {
  public selectedCategory?: string | undefined;
  public rss?: any[];
  constructor(public getNoticias: GetNoticias, public adminNoticias: AdminNoticiasService) {}

  public ngOnInit() {
    this.getNoticias.getRSS();
  }

  public onSelectedCategoryChange(category: string) {
    this.selectedCategory = category;
  }
}
