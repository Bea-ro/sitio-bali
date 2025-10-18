import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-button',
  imports: [RouterModule],
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button {
  @Input() buttonText: string = '';
  @Input() buttonLink: string = '';
}
