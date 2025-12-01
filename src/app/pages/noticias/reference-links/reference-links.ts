import {
  Component,
  ElementRef,
  QueryList,
  AfterViewInit,
  ViewChildren,
  HostListener,
  ChangeDetectorRef,
} from '@angular/core';
import { referenceLinks } from '../../../data/data';
import { ReferenceLink } from '../../../models/models';

@Component({
  selector: 'app-reference-links',
  imports: [],
  templateUrl: './reference-links.html',
  styleUrl: './reference-links.css',
})
export class ReferenceLinks implements AfterViewInit {
  public referenceLinks: ReferenceLink[] = referenceLinks;
  public currentIndex: number = 0;
  public dots: number[] = [];

  constructor(private cdr: ChangeDetectorRef) {}

  @ViewChildren('carouselItem', { read: ElementRef })
  items!: QueryList<ElementRef>;

  @ViewChildren('carousel', { read: ElementRef })
  carousel!: QueryList<ElementRef>;

  ngAfterViewInit() {
    setTimeout(() => {
      this.setupDots();
      this.listenToScroll();
      this.cdr.detectChanges();
    });
  }

  setupDots() {
    const carouselEl = this.carousel.first.nativeElement;
    const itemEls = this.items.map((i) => i.nativeElement);

    if (!carouselEl || itemEls.length === 0) return;

    const styles = window.getComputedStyle(carouselEl);
    const gap = parseInt(styles.columnGap || styles.gap || '0', 10);

    const itemWidth = itemEls[0].offsetWidth + gap; // ancho + gap
    const visibleWidth = carouselEl.clientWidth;

    const itemsPerView = Math.floor(visibleWidth / itemWidth) || 1;
    const totalPages = Math.ceil(itemEls.length / itemsPerView);

    this.dots = Array.from({ length: totalPages });
  }

  listenToScroll() {
    const carouselEl = this.carousel.first.nativeElement;

    carouselEl.addEventListener('scroll', () => {
      const scrollLeft = carouselEl.scrollLeft;
      const width = carouselEl.clientWidth;

      const index = Math.round(scrollLeft / width);
      if (this.currentIndex !== index) {
        this.currentIndex = index;
        this.cdr.markForCheck();
      }
    });
  }
  @HostListener('window:resize')
  onResize() {
    setTimeout(() => {
      this.setupDots();
      this.cdr.detectChanges();
    });
  }
}
