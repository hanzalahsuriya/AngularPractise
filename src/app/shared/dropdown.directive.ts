import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  addClass = false;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('click') clickListener() {
    this.addClass ? this.renderer.removeClass(this.elementRef, 'CLASS') : this.renderer.addClass(this.elementRef, 'CLASS');
    this.addClass = !this.addClass;
  }
}
