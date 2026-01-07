import { Component, OnInit } from '@angular/core';
import { AdminCategories } from '../../../services/admin-categories';
import { FormsModule } from '@angular/forms';
import { Category } from '../../../models/models';
import { MatTableModule } from '@angular/material/table';
import { AcceptCancelButtons } from '../../../shared/accept-cancel-buttons/accept-cancel-buttons';
import { EditDeleteButtons } from '../../../shared/edit-delete-buttons/edit-delete-buttons';
import { Spinner } from '../../../shared/spinner/spinner';

@Component({
  selector: 'app-admin-categorias',
  imports: [FormsModule, MatTableModule, AcceptCancelButtons, EditDeleteButtons, Spinner],
  templateUrl: './admin-categorias.html',
  styleUrl: './admin-categorias.css',
})
export class AdminCategorias implements OnInit {
  public editingCategoryId: string = '';
  public editingCategoryName: string = '';
  public newCategoryName: string = '';
  public displayedColumns = ['name', 'edition'];

  constructor(public adminCategories: AdminCategories) {}
  public ngOnInit() {
    this.adminCategories.getCategories();
  }

  public existingCategory(name: string) {
    if (!name) return false;
    return this.adminCategories
      .categories()
      .some((c) => c.category.trim().toLowerCase() === name.trim().toLowerCase());
  }
  public addCategory(category: string | undefined) {
    category && this.adminCategories.createCategory(category.trim());
    this.reset();
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
