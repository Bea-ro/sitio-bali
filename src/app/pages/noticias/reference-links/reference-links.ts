import { AfterViewInit, Component, ElementRef, OnDestroy, signal, ViewChild } from '@angular/core';
import { referenceLinks } from '../../../data/data';
import { ReferenceLink } from '../../../models/models';
import { arrowPath } from '../../../data/icon-paths';

@Component({
  selector: 'app-reference-links',
  imports: [],
  templateUrl: './reference-links.html',
  styleUrl: './reference-links.css',
})
export class ReferenceLinks implements AfterViewInit, OnDestroy {
  public referenceLinks: ReferenceLink[] = referenceLinks;
  public referencesShown: ReferenceLink[] = referenceLinks;
  public currentIndex: number = 0;
  public arrowPath: string = arrowPath;

  public hideCarouselNextArrow: boolean = false;
  public hideCarouselPrevArrow: boolean = true;

  @ViewChild('contenedor') contenedor!: ElementRef<HTMLUListElement>;

  private resizeObserver!: ResizeObserver;
  size = signal({ width: 1000, height: 0 });

  ngAfterViewInit() {
    this.resizeObserver = new ResizeObserver((entries) => {
      const cr = entries[0].contentRect;
      this.size.set({ width: cr.width, height: cr.height });
    });
    this.resizeObserver.observe(this.contenedor.nativeElement);
  }

  carouselNextElements() {
    this.currentIndex < this.referenceLinks.length - 6
      ? (this.currentIndex = this.currentIndex + 6)
      : (this.currentIndex = 0);
    this.referencesShown = this.referenceLinks.slice(this.currentIndex, this.currentIndex + 6);
    this.hideCarouselPrevArrow = false;
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

  ngOnDestroy() {
    this.resizeObserver.disconnect();
  }
}
