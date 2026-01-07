import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ShowScrollButton } from './core/directives/show-scroll-button';
import { ScrollTopButton } from './core/components/scroll-top-button/scroll-top-button';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ScrollTopButton, ShowScrollButton],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('sitio-bali');
}
