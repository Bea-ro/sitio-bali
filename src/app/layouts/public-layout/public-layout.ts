import { Component, OnInit, OnDestroy } from '@angular/core';
import { Header } from '../../core/components/header/header';
import { Footer } from '../../core/components/footer/footer';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-public-layout',
  imports: [RouterModule, Header, Footer],
  templateUrl: './public-layout.html',
  styleUrl: './public-layout.css',
})
export class PublicLayout implements OnInit, OnDestroy {
  ngOnInit() {
    document.body.classList.add('public');
    document.body.classList.remove('admin');
  }

  ngOnDestroy() {
    document.body.classList.remove('public');
  }
}
