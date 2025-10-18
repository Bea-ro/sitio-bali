import { Component } from '@angular/core';

import { SecondaryHeader } from '../../../shared/secondary-header/secondary-header';
import { MainHeader } from '../../../shared/main-header/main-header';

@Component({
  selector: 'app-header',
  imports: [SecondaryHeader, MainHeader],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {}
