import { Component, Input } from '@angular/core';
import { Service } from '../../models/models';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { environment } from '../../../environments/environment';
import { arrowPath } from '../../data/icon-paths';

@Component({
  selector: 'app-card',
  imports: [CommonModule, RouterModule],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  @Input() cardElement?: Service;
  @Input() indexElement?: number;
  public imagePrefix = environment.imagePrefix;
  public arrowPath = arrowPath;
}
