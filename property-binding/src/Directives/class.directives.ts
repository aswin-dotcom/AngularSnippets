import { Directive, ElementRef, Input, Renderer2 } from "@angular/core";

@Directive({
  selector:'[classdirective]'
})
export class customclassdirective{
  constructor(private element:ElementRef,private renderer:Renderer2){}
  @Input() set classdirective(style:Object){
     let arrayofarrays = Object.entries(style);
    for(let item of arrayofarrays)
    {
      if(item[1])
      {
        this.renderer.addClass(this.element.nativeElement,item[0])
        // this.renderer(this.element.nativeElement,item[])
      }
    }

  }
}



