import { Component, Input } from '@angular/core';
import { NoticiaExistente } from '../../../../../models/models';
import { AdminNoticiasService } from '../../../../../services/admin-noticias';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-editable-noticia',
  imports: [RouterLink],
  templateUrl: './editable-noticia.html',
  styleUrl: './editable-noticia.css',
})
export class EditableNoticia {
  @Input() noticia!: NoticiaExistente;

  constructor(private adminNoticias: AdminNoticiasService, private router: Router) {}
}
