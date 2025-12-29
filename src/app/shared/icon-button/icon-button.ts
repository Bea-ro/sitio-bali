import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-button',
  imports: [],
  templateUrl: './icon-button.html',
  styleUrl: './icon-button.css',
})
export class IconButton {
  @Input() path: string = '';
  @Input() class?: string = 'button-icon-container';
}
