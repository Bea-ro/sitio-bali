import { Component, computed, OnInit, signal } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { Navbar } from '../../../../shared/navbar/navbar';
import { Button } from '../../../../shared/button/button';
import { CommonModule } from '@angular/common';
import { burguerPath, cancelPath } from '../../../../data/icon-paths';
import { filter } from 'rxjs';

@Component({
  selector: 'app-main-header',
  imports: [RouterModule, Navbar, Button, CommonModule],
  templateUrl: './main-header.html',
  styleUrl: './main-header.css',
})
export class MainHeader implements OnInit {
  public burguerPath = burguerPath;
  public cancelPath = cancelPath;
  public burguerIsOpen = signal(false);
  public currentRoute = signal('');

  public get isPrivate(): boolean {
    return this.currentRoute().includes('area-privada');
  }

  public get currentPath() {
    return this.burguerIsOpen() ? this.cancelPath : this.burguerPath;
  }

  constructor(private router: Router) {}
  ngOnInit() {
    this.currentRoute.set(this.router.url);

    this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe((e: NavigationEnd) => {
        this.currentRoute.set(e.urlAfterRedirects);
        this.burguerIsOpen.set(false);
      });
  }
}
