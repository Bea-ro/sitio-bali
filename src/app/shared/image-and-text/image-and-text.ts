import { Component } from '@angular/core';
import { IMAGEPREURL } from '../../data/data';

@Component({
  selector: 'app-image-and-text',
  imports: [],
  templateUrl: './image-and-text.html',
  styleUrl: './image-and-text.css',
})
export class ImageAndText {
  public imagePrefix: string = IMAGEPREURL;
}
