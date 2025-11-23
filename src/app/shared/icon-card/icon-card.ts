import { Component, Input } from '@angular/core';
import { Customer } from '../../models/models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-icon-card',
  imports: [CommonModule],
  templateUrl: './icon-card.html',
  styleUrl: './icon-card.css',
})
export class IconCard {
  @Input() cardElement?: Customer;
  @Input() horizontal?: boolean = false;
}
