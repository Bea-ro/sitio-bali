import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { Button } from '../../../shared/button/button';
import { AdminNoticiasService } from '../../../services/admin-noticias';
import { MatTableModule } from '@angular/material/table';
import { IconButton } from '../../../shared/icon-button/icon-button';
import { binPath, pencilPath } from '../../../data/icon-paths';
import { DatePipe } from '../../../pipes/date-pipe';

@Component({
  selector: 'app-admin-noticias',
  imports: [CommonModule, RouterModule, Button, IconButton, MatTableModule, DatePipe],
  templateUrl: './admin-noticias.html',
  styleUrl: './admin-noticias.css',
})
export class AdminNoticias {
  public binPath = binPath;
  public pencilPath = pencilPath;
  public displayedColumns = ['title', 'date', 'category', 'edition'];
  constructor(public adminNoticias: AdminNoticiasService, private router: Router) {}

  ngOnInit() {
    this.adminNoticias.getNoticias();
  }

  public deleteNoticia(noticiaId: string | undefined) {
    noticiaId && this.adminNoticias.deleteNoticia(noticiaId);
  }
  public goToEditNoticia(noticiaId: string | undefined) {
    noticiaId && this.router.navigateByUrl(`/admin-panel/noticias/editar/${noticiaId}`);
  }
}
