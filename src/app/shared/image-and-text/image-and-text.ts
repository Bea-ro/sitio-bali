import { Component, Input } from '@angular/core';
import { IMAGEPREURL } from '../../data/data';
import { Paragraph, Service } from '../../models/models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-image-and-text',
  imports: [CommonModule],
  templateUrl: './image-and-text.html',
  styleUrl: './image-and-text.css',
})
export class ImageAndText {
  public imagePrefix: string = IMAGEPREURL;
  @Input() paragraphElement?: Paragraph | Service;
  @Input() paragraphIndex: number = 0;
}
