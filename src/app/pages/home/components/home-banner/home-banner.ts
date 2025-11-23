import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { interval, map } from 'rxjs';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-home-banner',
  imports: [CommonModule],
  templateUrl: './home-banner.html',
  styleUrl: './home-banner.css',
})
export class HomeBanner {
  public asesorias: string[] = ['fiscal', 'contable', 'laboral', 'mercantil'];
  public imagePrefix = environment.imagePrefix;

  asesoria$ = interval(2000).pipe(map((i) => this.asesorias[i % this.asesorias.length]));
}
