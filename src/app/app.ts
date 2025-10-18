import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './core/components/header/header';
import { Footer } from './core/components/footer/footer';
import { ScrollTopButton } from './core/components/scroll-top-button/scroll-top-button';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, ScrollTopButton],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('sitio-bali');
}
