import { Component, Input } from '@angular/core';
import { INoticia } from '../../../../../models/models';
import { IconButton } from '../../../../../shared/icon-button/icon-button';
import { AdminNoticias } from '../../../../../services/admin-noticias';
import { binPath, pencilPath } from '../../../../../data/icon-paths';

@Component({
  selector: 'app-editable-noticia',
  imports: [IconButton],
  templateUrl: './editable-noticia.html',
  styleUrl: './editable-noticia.css',
})
export class EditableNoticia {
  @Input() noticia!: INoticia;

  public binPath = binPath;
  public pencilPath = pencilPath;

  constructor(private adminNoticias: AdminNoticias) {}

  public deleteNoticia(noticiaID: string | undefined) {
    noticiaID && this.adminNoticias.deleteNoticia(noticiaID);
  }
}
