import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-scroll-top-button',
  imports: [RouterModule],
  templateUrl: './scroll-top-button.html',
  styleUrl: './scroll-top-button.css',
})
export class ScrollTopButton implements OnInit, OnDestroy {
  public currentRoute: string = '';
  private routeSubscription: Subscription | null = null;

  constructor(private router: Router) {}

  ngOnInit() {
    this.currentRoute = this.router.url;
    this.routeSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        event.url.includes('#')
          ? (this.currentRoute = event.url.split('#')[0])
          : (this.currentRoute = event.url);
      }
    });
  }

  ngOnDestroy() {
    if (this.routeSubscription) {
      this.routeSubscription.unsubscribe();
    }
  }
}
