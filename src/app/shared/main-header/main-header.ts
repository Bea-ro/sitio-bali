import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Burguer } from '../burguer/burguer';
import { Navbar } from '../navbar/navbar';
import { Button } from '../button/button';

@Component({
  selector: 'app-main-header',
  imports: [RouterModule, Navbar, Burguer, Button],
  templateUrl: './main-header.html',
  styleUrl: './main-header.css',
})
export class MainHeader {}
