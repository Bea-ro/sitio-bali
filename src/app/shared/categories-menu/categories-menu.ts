import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { AdminCategories } from '../../services/admin-categories';
import { Category } from '../../models/models';

@Component({
  selector: 'app-categories-menu',
  imports: [CommonModule],
  templateUrl: './categories-menu.html',
  styleUrl: './categories-menu.css',
})
export class CategoriesMenu {
  @Input() activeCategory?: Category;
  @Output() selectedCategory = new EventEmitter<Category>();

  constructor(public adminCategories: AdminCategories, private route: ActivatedRoute) {}

  public ngOnInit() {
    this.adminCategories.getCategories();
  }
  public selectCategory(category: Category) {
    this.selectedCategory.emit(category);
  }
  public cleanCategorySelection() {
    this.selectedCategory.emit(undefined);
  }
}
