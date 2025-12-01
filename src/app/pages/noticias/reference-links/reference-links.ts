import { Component } from '@angular/core';
import { referenceLinks } from '../../../data/data';
import { ReferenceLink } from '../../../models/models';

@Component({
  selector: 'app-reference-links',
  imports: [],
  templateUrl: './reference-links.html',
  styleUrl: './reference-links.css',
})
export class ReferenceLinks {
  public referenceLinks: ReferenceLink[] = referenceLinks;
  public referencesShown: ReferenceLink[] = referenceLinks.slice(0, 6);
  public currentIndex: number = 0;

  public hideCarouselNextArrow: boolean = false;
  public hideCarouselPrevArrow: boolean = true;

  carouselNextElements() {
    this.currentIndex < this.referenceLinks.length - 6
      ? (this.currentIndex = this.currentIndex + 6)
      : (this.currentIndex = 0);
    this.referencesShown = this.referenceLinks.slice(this.currentIndex, this.currentIndex + 6);
    this.hideCarouselPrevArrow = false;
    console.log(this.currentIndex);
    console.log(this.currentIndex >= this.referenceLinks.length - 6);
    if (this.currentIndex >= this.referenceLinks.length - 6) {
      this.hideCarouselNextArrow = true;
    }
  }

  carouselPrevElements() {
    this.currentIndex > 0 ? (this.currentIndex = this.currentIndex - 6) : (this.currentIndex = 0);
    this.referencesShown = this.referenceLinks.slice(this.currentIndex, this.currentIndex + 6);
    if (this.currentIndex < 6) {
      this.hideCarouselPrevArrow = true;
      this.hideCarouselNextArrow = false;
    }
  }
}
