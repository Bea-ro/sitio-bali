import { Component } from '@angular/core';
import { ImageAndText } from '../../shared/image-and-text/image-and-text';
import { Paragraph } from '../../models/models';
import { nosotrosParagraphs } from '../../data/data';

@Component({
  selector: 'app-nosotros',
  imports: [ImageAndText],
  templateUrl: './nosotros.html',
  styleUrl: './nosotros.css',
})
export class Nosotros {
  public nosotrosParagraphs: Paragraph[] = nosotrosParagraphs;
}
