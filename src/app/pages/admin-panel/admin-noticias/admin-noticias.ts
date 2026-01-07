import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { Button } from '../../../shared/button/button';
import { AdminNoticiasService } from '../../../services/admin-noticias';
import { MatTableModule } from '@angular/material/table';
import { DatePipe } from '../../../pipes/date-pipe';
import { Paginator } from '../../../shared/paginator/paginator';
import { Search } from '../../../shared/search/search';
import { EditDeleteButtons } from '../../../shared/edit-delete-buttons/edit-delete-buttons';
import { Spinner } from '../../../shared/spinner/spinner';

@Component({
  selector: 'app-admin-noticias',
  imports: [
    CommonModule,
    RouterModule,
    Button,
    MatTableModule,
    DatePipe,
    Paginator,
    Search,
    EditDeleteButtons,
    Spinner,
  ],
  templateUrl: './admin-noticias.html',
  styleUrl: './admin-noticias.css',
})
export class AdminNoticias implements OnInit {
  public displayedColumns: string[] = ['title', 'date', 'category', 'edition'];
  public page: number = 0;
  public pageSize: number = 2;
  public filterText: string = '';

  constructor(public adminNoticias: AdminNoticiasService, private router: Router) {}

  ngOnInit() {
    this.getNoticias();
  }

  public getNoticias() {
    this.adminNoticias.getNoticiasPaginated$(this.page, this.pageSize, this.filterText).subscribe();
  }

  public removeNoticia(noticiaId: string | undefined) {
    noticiaId &&
      this.adminNoticias.deleteNoticia$(noticiaId).subscribe({
        next: () => alert('Noticia eliminada.'),
        error: (message: string) => alert(message),
      });
  }
  public goToEditNoticia(noticiaId: string | undefined) {
    noticiaId && this.router.navigateByUrl(`/admin-panel/noticias/editar/${noticiaId}`);
  }

  get totalItems() {
    return this.adminNoticias.totalNoticias();
  }

  public onPageChange(event: { page: number; pageSize: number }) {
    this.page = event.page;
    this.pageSize = event.pageSize;
    this.getNoticias();
  }

  public onInputChange(event: { filter: string }) {
    this.page = 0;
    this.filterText = event.filter;
    this.getNoticias();
  }
}
