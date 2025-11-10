import { Component } from '@angular/core';
import { INoticia } from '../../../models/models';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Button } from '../../../shared/button/button';
import { GetNoticias } from '../../../core/services/get-noticias';

@Component({
  selector: 'app-admin-noticias',
  imports: [CommonModule, RouterModule, Button],
  templateUrl: './admin-noticias.html',
  styleUrl: './admin-noticias.css',
})
export class AdminNoticias {
  public noticias$?: Observable<INoticia[]>;

  constructor(private getNoticias: GetNoticias) {}

  ngOnInit() {
    this.noticias$ = this.getNoticias.getNoticias();
  }
}
