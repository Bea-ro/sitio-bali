import { Component } from '@angular/core';
import { NoticiaCard } from '../../shared/noticia-card/noticia-card';
import { INoticia } from '../../models/models';
import { Observable } from 'rxjs';
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
  public noticias$?: Observable<INoticia[]>;
  public selectedCategory: string = '';

  constructor(private getNoticias: GetNoticias) {}

  public ngOnInit() {
    this.noticias$ = this.getNoticias.getNoticias();
  }

  public onSelectedCategoryChange(category: string) {
    this.selectedCategory = category;
  }
}
