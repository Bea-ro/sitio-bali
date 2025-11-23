import { Component } from '@angular/core';
import { Service } from '../../models/models';
import { services } from '../../data/data';
import { ImageAndText } from '../../shared/image-and-text/image-and-text';
import { interval, map } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-servicios',
  imports: [ImageAndText, CommonModule],
  templateUrl: './servicios.html',
  styleUrl: './servicios.css',
})
export class Servicios {
  public services: Service[] = services;
  public asesorias: string[] = ['fiscal', 'contable', 'laboral', 'mercantil'];

  asesoria$ = interval(2000).pipe(map((i) => this.asesorias[i % this.asesorias.length]));
}
