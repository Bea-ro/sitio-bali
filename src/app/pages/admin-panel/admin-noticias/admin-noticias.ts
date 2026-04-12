import { Component, computed, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { Button } from '../../../shared/button/button';
import { AdminNoticiasService } from '../../../services/admin-noticias';
import { MatTableModule } from '@angular/material/table';
import { DatePipe } from '../../../pipes/date-pipe';
import { Paginator } from '../../../shared/paginator/paginator';
import { Search } from '../../../shared/search/search';
import { EditDeleteButtons } from '../../../shared/edit-delete-buttons/edit-delete-buttons';
import { FormsModule } from '@angular/forms';
import { AdminCategories } from '../../../services/admin-categories';

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
    FormsModule,
  ],
  templateUrl: './admin-noticias.html',
  styleUrl: './admin-noticias.css',
})
export class AdminNoticias implements OnInit {
  public displayedColumns: string[] = ['title', 'date', 'category', 'edition'];
  public page: number = 0;
  public pageSize: number = 2;
  public filterText: string = '';

  public filterCategory = signal<string | null>(null);
  public filterDate = signal<string | null>(null);

  constructor(
    public adminNoticias: AdminNoticiasService,
    public adminCategories: AdminCategories,
    private router: Router
  ) {}

  ngOnInit() {
    this.getNoticias();
    this.adminCategories.getCategories$().subscribe();
  }

  public getNoticias() {
    this.adminNoticias.getNoticiasPaginated$(this.page, this.pageSize, this.filterText).subscribe();
  }

  public removeNoticia(noticiaId: string | undefined) {
    confirm('¿Estás seguro de eliminar esta noticia?') &&
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

  public filteredNoticias = computed(() => {
    return this.adminNoticias.noticias().filter((noticia) => {
      const category = this.filterCategory();
      const matchCategory = category ? noticia.category === category : true;

      const date = this.filterDate();
      const fragment = noticia.date.split(' ');
      const matchDate = date ? fragment[1] + ' ' + fragment[2] === date : true;

      return matchCategory && matchDate;
    });
  });
}
