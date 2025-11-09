import { Component } from '@angular/core';
import { INoticia } from '../../../models/models';
import { Observable } from 'rxjs';
import { GetNoticia } from '../../../services/get-noticia';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Button } from '../../../shared/button/button';

@Component({
  selector: 'app-admin-noticias',
  imports: [CommonModule, RouterModule, Button],
  templateUrl: './admin-noticias.html',
  styleUrl: './admin-noticias.css',
})
export class AdminNoticias {
  public noticias$?: Observable<INoticia[]>;

  constructor(private getNoticia: GetNoticia) {}

  ngOnInit() {
    this.noticias$ = this.getNoticia.getNoticias();
  }
}
