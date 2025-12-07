import { Component } from '@angular/core';
import { arrowPath } from '../../../data/icon-paths';

@Component({
  selector: 'app-scroll-top-button',
  imports: [],
  templateUrl: './scroll-top-button.html',
  styleUrl: './scroll-top-button.css',
})
export class ScrollTopButton {
  public arrowPath: string = arrowPath;
  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}
