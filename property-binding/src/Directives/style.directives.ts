// import { SelectorContext } from "@angular/compiler";
import { Directive, ElementRef, Input, Renderer2 } from "@angular/core";


@Directive({
  selector:'[style]'
})
export class styledirective{
  constructor(private element:ElementRef,private renderer:Renderer2){}
  @Input() set style(style:Object)
  {
    let arrayofarrays = Object.entries(style);
    for(let i of arrayofarrays)
    {
      this.renderer.setStyle(this.element.nativeElement,i[0],i[1]);
    }

  }


}



