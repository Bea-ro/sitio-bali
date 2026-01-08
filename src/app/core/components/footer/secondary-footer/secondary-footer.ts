import { Component } from '@angular/core';

@Component({
  selector: 'app-secondary-footer',
  imports: [],
  templateUrl: './secondary-footer.html',
  styleUrl: './secondary-footer.css',
})
export class SecondaryFooter {
  public currentYear = new Date().getFullYear();
}
