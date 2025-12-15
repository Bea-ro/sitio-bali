import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { AdminCategories } from '../../services/admin-categories';

@Component({
  selector: 'app-categories-menu',
  imports: [CommonModule],
  templateUrl: './categories-menu.html',
  styleUrl: './categories-menu.css',
})
export class CategoriesMenu implements OnInit {
  @Input() activeCategory?: string;
  @Output() selectedCategory = new EventEmitter<string>();

  constructor(public adminCategories: AdminCategories, private route: ActivatedRoute) {}

  public ngOnInit() {
    this.adminCategories.getCategoriesUsed();
  }
  public selectCategory(category: string) {
    this.selectedCategory.emit(category);
  }
  public cleanCategorySelection() {
    this.selectedCategory.emit(undefined);
  }
}
