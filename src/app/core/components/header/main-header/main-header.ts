import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Navbar } from '../../../../shared/navbar/navbar';
import { Burguer } from '../../../../shared/burguer/burguer';
import { Button } from '../../../../shared/button/button';

@Component({
  selector: 'app-main-header',
  imports: [RouterModule, Navbar, Burguer, Button],
  templateUrl: './main-header.html',
  styleUrl: './main-header.css',
})
export class MainHeader {}
