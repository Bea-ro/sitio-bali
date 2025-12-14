import { Component, OnInit } from '@angular/core';
import { AdminCategories } from '../../../services/admin-categories';
import { Button } from '../../../shared/button/button';
import { IconButton } from '../../../shared/icon-button/icon-button';
import { binPath, pencilPath } from '../../../data/icon-paths';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-categorias',
  imports: [Button, IconButton, FormsModule],
  templateUrl: './admin-categorias.html',
  styleUrl: './admin-categorias.css',
})
export class AdminCategorias implements OnInit {
  public binPath = binPath;
  public pencilPath = pencilPath;
  public editingCategoryId: string = '';

  constructor(public adminCategories: AdminCategories) {}
  public ngOnInit() {
    this.adminCategories.getCategories();
  }
  public editCategory(id: string | undefined) {
    if (id) {
      this.editingCategoryId = id;
    }
  }

  public save(id: string, value: string) {
    this.adminCategories.updateCategory(id, value);
  }
  public cancel() {}
  public deleteCategory(id: string | undefined) {
    id && this.adminCategories.deleteCategory(id);
  }
}
