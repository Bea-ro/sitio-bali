import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Login } from '../../shared/login/login';

@Component({
  selector: 'app-admin-login',
  imports: [CommonModule, Login],
  templateUrl: './admin-login.html',
  styleUrl: './admin-login.css',
})
export class AdminLogin {}
