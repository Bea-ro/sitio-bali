import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { interval, map, startWith, timer } from 'rxjs';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-home-banner',
  imports: [CommonModule],
  templateUrl: './home-banner.html',
  styleUrl: './home-banner.css',
})
export class HomeBanner implements OnInit {
  public asesorias: string[] = ['fiscal', 'contable', 'laboral', 'mercantil'];
  public imagePrefix = environment.imagePrefix;
  public images: string[] = [
    this.imagePrefix + '/v1771784672/bali/bali-asociados-presentacion_1_kc6nux.webp',
    this.imagePrefix + '/v1771784672/bali/bali-asociados-presentacion_3_aimtki.webp',
    this.imagePrefix + '/v1771784672/bali/bali-asociados-presentacion_4_xsxaek.webp',
    this.imagePrefix + '/v1771784672/bali/bali-asociados-presentacion_2_autogm.webp',
  ];

  public asesoriaIndex$ = interval(2000).pipe(
    startWith(0),
    map((i) => i % this.asesorias.length)
  );

  public image$ = interval(2000).pipe(
    map((i) => this.images[i % this.images.length]),
    startWith(this.images[0])
  );

  ngOnInit() {
    this.images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }
}
