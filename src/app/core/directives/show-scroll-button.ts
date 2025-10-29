import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appShowScrollButton]',
})
export class ShowScrollButton {
  @HostBinding('class.visible') isVisible = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;

    this.isVisible = scrollPosition > 200;
  }
}
