import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdownMenu]'
})
export class DropdownMenuDirective {
  dropdownOpen: boolean = false;
  private className = 'open';
  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('click') clickListener() {
    this.dropdownOpen = !this.dropdownOpen;

    if(this.dropdownOpen) {
      this.renderer.addClass(this.elementRef.nativeElement, this.className);
    } else {
      this.renderer.removeClass(this.elementRef.nativeElement, this.className)      
    }
  }
}
