import { ConstantPool } from '@angular/compiler';
import { Component, ElementRef, QueryList, ViewChild, ViewChildren, viewChildren } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ref-and-decorators';
  handleclick(ref: HTMLInputElement) {
    console.log(ref.value);
  }
  ans: any;
  toggle:boolean=false;

  @ViewChild('inputref')
  searchInputEL!: ElementRef;

  @ViewChildren('inputrefs') searchInputElS!:QueryList<ElementRef>;


  getvalue() {
    const value = this.searchInputEL.nativeElement.value;
    console.log(value);
  }
  show(){
    this.searchInputElS.forEach((Element)=>{
      console.log(Element.nativeElement.value)
    })

  }
}
