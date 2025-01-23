import { Directive, ElementRef } from "@angular/core";


@Directive({
  selector:'[Dark]'
})

export class background_color{

  constructor(private element:ElementRef) {
    // this.element= element
  }
  ngOnInit(){
    this.element.nativeElement.style.backgroundColor='red';
    this.element.nativeElement.style.color='white';
  }




}


