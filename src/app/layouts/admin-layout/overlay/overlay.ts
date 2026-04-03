import { Component } from '@angular/core';
import { Login } from '../../../shared/login/login';

@Component({
  selector: 'app-overlay',
  imports: [Login],
  templateUrl: './overlay.html',
  styleUrl: './overlay.css',
})
export class Overlay {}
