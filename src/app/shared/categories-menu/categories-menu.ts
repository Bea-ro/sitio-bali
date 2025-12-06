import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetNoticias } from '../../core/services/get-noticias';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categories-menu',
  imports: [CommonModule],
  templateUrl: './categories-menu.html',
  styleUrl: './categories-menu.css',
})
export class CategoriesMenu {
  @Output() selectedCategory = new EventEmitter<string>();
  public selectedCategoryIndex: number | null = null;

  constructor(public getNoticias: GetNoticias, private route: ActivatedRoute) {}

  public ngOnInit() {
    this.getNoticias.categories();
  }
  public updateFilterCategory(category: string, index: number | null) {
    this.selectedCategory.emit(category);
    this.selectedCategoryIndex = index;
  }
}
