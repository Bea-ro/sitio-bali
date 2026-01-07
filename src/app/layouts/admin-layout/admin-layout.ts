import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Aside } from './aside/aside';

@Component({
  selector: 'app-admin-layout',
  imports: [RouterModule, Aside],
  templateUrl: './admin-layout.html',
  styleUrl: './admin-layout.css',
})
export class AdminLayout implements OnInit, OnDestroy {
  ngOnInit() {
    document.body.classList.add('admin');
    document.body.classList.remove('public');
  }

  ngOnDestroy() {
    document.body.classList.remove('admin');
  }
}
