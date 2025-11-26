import { Component, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { GetNoticias } from '../../core/services/get-noticias';

@Component({
  selector: 'app-categories-menu',
  imports: [CommonModule],
  templateUrl: './categories-menu.html',
  styleUrl: './categories-menu.css',
})
export class CategoriesMenu {
  public categories$?: Observable<string[]>;
  //public selectedCategory: string = '';
  @Output() selectedCategory = new EventEmitter<string>();
  public selectedCategoryIndex: number | null = null;

  constructor(private getNoticias: GetNoticias) {}

  public ngOnInit() {
    this.categories$ = this.getNoticias.getCategories();
  }
  public updateFilterCategory(category: string, index: number | null) {
    // this.selectedCategory = category;
    this.selectedCategory.emit(category);
    this.selectedCategoryIndex = index;
  }
}
