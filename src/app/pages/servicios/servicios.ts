import { AfterViewInit, Component } from '@angular/core';
import { Service } from '../../models/models';
import { services } from '../../data/data';
import { ImageAndText } from '../../shared/image-and-text/image-and-text';
import { interval, map } from 'rxjs';
import { CommonModule, ViewportScroller } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-servicios',
  imports: [ImageAndText, CommonModule],
  templateUrl: './servicios.html',
  styleUrl: './servicios.css',
})
export class Servicios implements AfterViewInit {
  public services: Service[] = services;
  public asesorias: string[] = ['fiscal', 'contable', 'laboral', 'mercantil'];

  asesoria$ = interval(2000).pipe(map((i) => this.asesorias[i % this.asesorias.length]));

  constructor(private route: ActivatedRoute, private scroller: ViewportScroller) {}
  ngAfterViewInit() {
    // Esperar a que Angular termine de renderizar
    setTimeout(() => {
      const fragment = this.route.snapshot.fragment;
      if (fragment) {
        const el = document.getElementById(fragment);
        if (el) {
          const y = el.getBoundingClientRect().top + window.scrollY - 118;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }
    }, 150);
  }
}
