import { Component, Input } from '@angular/core';
import { Customer } from '../../models/models';

@Component({
  selector: 'app-icon-card',
  imports: [],
  templateUrl: './icon-card.html',
  styleUrl: './icon-card.css',
})
export class IconCard {
  @Input() cardElement?: Customer;
}
