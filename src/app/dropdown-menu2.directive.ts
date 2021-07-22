import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdownMenu2]'
})
export class DropdownMenu2Directive {
  @HostBinding('class.open') isOpen = false;
  constructor() { }

  @HostListener('click') clickListener() {
    this.isOpen = !this.isOpen;
  }
}
