import { Component, Input } from '@angular/core';
import { NoticiaExistente } from '../../../../../models/models';
import { IconButton } from '../../../../../shared/icon-button/icon-button';
import { AdminNoticiasService } from '../../../../../services/admin-noticias';
import { binPath, pencilPath } from '../../../../../data/icon-paths';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-editable-noticia',
  imports: [IconButton, RouterLink],
  templateUrl: './editable-noticia.html',
  styleUrl: './editable-noticia.css',
})
export class EditableNoticia {
  @Input() noticia!: NoticiaExistente;

  public binPath = binPath;
  public pencilPath = pencilPath;

  constructor(private adminNoticias: AdminNoticiasService, private router: Router) {}

  public deleteNoticia(noticiaId: string | undefined) {
    noticiaId && this.adminNoticias.deleteNoticia(noticiaId);
  }
  public goToEditNoticia(noticiaId: string | undefined) {
    noticiaId && this.router.navigateByUrl(`/admin-panel/noticias/editar/${noticiaId}`);
  }
}
