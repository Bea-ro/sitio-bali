import { Component } from '@angular/core';

@Component({
  selector: 'app-scroll-top-button',
  imports: [],
  templateUrl: './scroll-top-button.html',
  styleUrl: './scroll-top-button.css',
})
export class ScrollTopButton {
  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}
