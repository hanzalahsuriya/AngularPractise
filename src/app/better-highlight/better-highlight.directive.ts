import {
  Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2, RendererStyleFlags2
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  @Input() defaultColor: string = 'blue';
  @Input() highlightColor: string = 'yellow';

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  @HostBinding('style.backgroundColor') bgColor:string = this.defaultColor;

  ngOnInit(): void {
    this.bgColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseEnter() {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
    this.bgColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseLeave() {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');    
    this.bgColor = this.defaultColor;
  }
}
