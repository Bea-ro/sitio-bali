import { Component, Input } from '@angular/core';
import { Service } from '../../models/models';
import { CommonModule } from '@angular/common';
import { IMAGEPREURL } from '../../data/data';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-card',
  imports: [CommonModule, RouterModule],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  @Input() cardElement?: Service;
  @Input() indexElement?: number;
  public imagePrefix = IMAGEPREURL;
}
