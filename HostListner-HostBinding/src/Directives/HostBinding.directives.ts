import { style } from "@angular/animations";
import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from "@angular/core";


@Directive({
  selector:'[hostbind]'
})


export class hostbindclass{
  constructor(private element:ElementRef,private renderer:Renderer2){}
  @HostBinding('style.color') color!:string;
  @HostListener('mouseenter') check_hostbinding(){
    this.color='red';
  }

}

