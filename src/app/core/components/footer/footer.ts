import { Component } from '@angular/core';
import { MainFooter } from './main-footer/main-footer';
import { SecondaryFooter } from './secondary-footer/secondary-footer';

@Component({
  selector: 'app-footer',
  imports: [MainFooter, SecondaryFooter],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {}
