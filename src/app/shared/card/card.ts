import { Component, Input } from '@angular/core';
import { Service } from '../../models/models';
import { CommonModule } from '@angular/common';
import { IMAGEPREURL } from '../../data/data';

@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  @Input() cardElement?: Service;
  public imagePrefix = IMAGEPREURL;
}
