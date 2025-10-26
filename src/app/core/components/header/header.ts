import { Component } from '@angular/core';
import { SecondaryHeader } from './secondary-header/secondary-header';
import { MainHeader } from './main-header/main-header';

@Component({
  selector: 'app-header',
  imports: [SecondaryHeader, MainHeader],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {}
