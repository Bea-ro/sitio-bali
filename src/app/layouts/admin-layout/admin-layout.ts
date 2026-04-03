import { Component, computed, OnDestroy, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Aside } from './aside/aside';
import { BottomMenu } from './bottom-menu/bottom-menu';
import { Overlay } from './overlay/overlay';
import { AdminAdmins } from '../../services/admin-admins';
import { Spinner } from '../../shared/spinner/spinner';
import { AdminClientesService } from '../../services/admin-clientes';
import { AdminCategories } from '../../services/admin-categories';
import { AdminNoticiasService } from '../../services/admin-noticias';

@Component({
  selector: 'app-admin-layout',
  imports: [RouterModule, Aside, BottomMenu, Overlay, Spinner],
  templateUrl: './admin-layout.html',
  styleUrl: './admin-layout.css',
})
export class AdminLayout implements OnInit, OnDestroy {
  constructor(
    public adminAdmins: AdminAdmins,
    public adminCategories: AdminCategories,
    public adminClientes: AdminClientesService,
    public adminNoticias: AdminNoticiasService
  ) {}

  public isLoading = computed(
    () =>
      this.adminAdmins.loading() ||
      this.adminNoticias.loading() ||
      this.adminCategories.loading() ||
      this.adminClientes.loading()
  );
  ngOnInit() {
    document.body.classList.add('admin');
    document.body.classList.remove('public');
  }

  ngOnDestroy() {
    document.body.classList.remove('admin');
  }
}
