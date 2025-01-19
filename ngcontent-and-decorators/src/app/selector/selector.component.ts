import { Component, ContentChild, ContentChildren, ElementRef, QueryList } from '@angular/core';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrl: './selector.component.css'
})
export class SelectorComponent {
  @ContentChild('name') htag!:ElementRef;
  show(){
    // console.log(this.htag.nativeElement.innerHTML)
    this.tags.forEach((Element)=>{
      console.log(Element.nativeElement.innerHTML);
    })

  }

  @ContentChildren('name') tags!:QueryList<ElementRef>;





}
