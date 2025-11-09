import { Component, signal } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
// import { ScrollTopButton } from './core/components/scroll-top-button/scroll-top-button';
// import { ShowScrollButton } from './core/directives/show-scroll-button';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    // ScrollTopButton, ShowScrollButton
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('sitio-bali');

  constructor(private router: Router) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        const url = event.urlAfterRedirects;
        const isAdmin = url.includes('/admin');
        document.body.classList.toggle('admin', isAdmin);
        document.body.classList.toggle('public', !isAdmin);
      });
  }
}
