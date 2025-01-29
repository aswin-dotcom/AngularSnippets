import { Directive, ElementRef, Input, Renderer2 } from "@angular/core";

@Directive({
  selector:'[condition]'
})
export class conditionaldirective{
  constructor(private elemenet:ElementRef,private renderer:Renderer2){}
  @Input() set condition(boolean:Boolean)
  {
    if(boolean){
      this.renderer.setStyle(this.elemenet.nativeElement,'display','none')
    }
  }
}

