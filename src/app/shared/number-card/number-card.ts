import { Component, Input } from '@angular/core';
import { Result } from '../../models/models';

@Component({
  selector: 'app-number-card',
  imports: [],
  templateUrl: './number-card.html',
  styleUrl: './number-card.css',
})
export class NumberCard {
  @Input() cardElement?: Result;
}
