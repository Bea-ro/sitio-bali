import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Aside } from './aside/aside';

@Component({
  selector: 'app-admin-layout',
  imports: [RouterModule, Aside],
  templateUrl: './admin-layout.html',
  styleUrl: './admin-layout.css',
})
export class AdminLayout {}
