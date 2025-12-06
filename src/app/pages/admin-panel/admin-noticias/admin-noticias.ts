import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Button } from '../../../shared/button/button';
import { GetNoticias } from '../../../core/services/get-noticias';
import { EditableNoticia } from './components/editable-noticia/editable-noticia';

@Component({
  selector: 'app-admin-noticias',
  imports: [CommonModule, RouterModule, Button, EditableNoticia],
  templateUrl: './admin-noticias.html',
  styleUrl: './admin-noticias.css',
})
export class AdminNoticias {
  constructor(public getNoticias: GetNoticias) {}

  ngOnInit() {
    this.getNoticias.getNoticias();
  }
}
