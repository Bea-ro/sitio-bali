import { Component, Input } from '@angular/core';
import { Paragraph, Service } from '../../models/models';
import { CommonModule } from '@angular/common';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-image-and-text',
  imports: [CommonModule],
  templateUrl: './image-and-text.html',
  styleUrl: './image-and-text.css',
})
export class ImageAndText {
  @Input() paragraphElement?: Paragraph | Service;
  @Input() paragraphIndex: number = 0;
  public imagePrefix = environment.imagePrefix;
}
