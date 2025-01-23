import { Directive, ElementRef, HostListener, Renderer2 } from "@angular/core";

@Directive({
  selector:'[hosting]'
})
export class hostingdirectives{
  constructor(private element:ElementRef,private renderer:Renderer2){}
  ngOnInit(){
    this.renderer.setStyle(this.element.nativeElement,'cursor','pointer');
  }
  @HostListener('mouseenter') changeclass(){
    this.renderer.addClass(this.element.nativeElement,'check')
    this.renderer.setStyle(this.element.nativeElement,'pointer','cursor');

  }
  @HostListener('mouseout') removeclass(){
    this.renderer.removeClass(this.element.nativeElement,'check')
  }

}




