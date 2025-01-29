import { Directive, ElementRef, HostListener, Input, Renderer2 } from "@angular/core";


@Directive({
  selector:'[custompropertybindding]'
})
export class custom{
  @Input()
  color:string='';
  constructor(private element:ElementRef,private render:Renderer2){}
  @HostListener('click') onclick(){
     this.render.setStyle(this.element.nativeElement,'backgroundColor',this.color);


  }
}

