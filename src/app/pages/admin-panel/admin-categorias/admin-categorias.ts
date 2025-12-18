import { Component, OnInit } from '@angular/core';
import { AdminCategories } from '../../../services/admin-categories';
import { IconButton } from '../../../shared/icon-button/icon-button';
import { binPath, pencilPath } from '../../../data/icon-paths';
import { FormsModule } from '@angular/forms';
import { Category } from '../../../models/models';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-admin-categorias',
  imports: [IconButton, FormsModule, MatTableModule],
  templateUrl: './admin-categorias.html',
  styleUrl: './admin-categorias.css',
})
export class AdminCategorias implements OnInit {
  public binPath = binPath;
  public pencilPath = pencilPath;
  public editingCategoryId: string = '';
  public editingCategoryName: string = '';
  public newCategoryName: string = '';
  public displayedColumns = ['name', 'edition'];

  constructor(public adminCategories: AdminCategories) {}
  public ngOnInit() {
    this.adminCategories.getCategories();
  }

  public addCategory(category: string | undefined) {
    category && this.adminCategories.createCategory(category.trim());
  }
  public editCategory(category: Category) {
    if (category._id) {
      this.editingCategoryId = category._id;
    }
    this.editingCategoryName = category.category;
  }

  public save(id: string, value: string) {
    this.adminCategories.updateCategory(id, value);
    this.editingCategoryId = '';
  }

  public cancel() {
    this.editingCategoryId = '';
    this.editingCategoryName = '';
  }
  public reset() {
    this.newCategoryName = '';
  }
  public deleteCategory(id: string | undefined) {
    id && this.adminCategories.deleteCategory(id);
  }
}
