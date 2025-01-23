import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[render]',
})
export class customrender {
  /**
   *
   */
  constructor(private element: ElementRef, private renderer: Renderer2) {}
  ngOnInit() {
    this.renderer.setStyle(this.element.nativeElement, 'color', 'red');
    this.renderer.setStyle(
      this.element.nativeElement,
      'backgroundColor',
      'black'
    );
  }
}
