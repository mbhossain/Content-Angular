import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMouseEnterLeave]'
})
export class MouseEnterLeaveDirective {

  constructor(
    private element: ElementRef
    , private renderer: Renderer2
  ) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(this.element.nativeElement, 'margin', '5px 10px');
    this.renderer.setStyle(this.element.nativeElement, 'padding', '30px 30px');
    this.renderer.setStyle(this.element.nativeElement, 'transsition', '0.5s');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.setStyle(this.element.nativeElement, 'margin', 'auto');
    this.renderer.setStyle(this.element.nativeElement, 'width', '50%');
    this.renderer.setStyle(this.element.nativeElement, 'border', '3px solid green');
    this.renderer.setStyle(this.element.nativeElement, 'padding', '10px');
    this.renderer.setStyle(this.element.nativeElement, 'transsition', '0.5s');
  }

}
