import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-app-child',
  templateUrl: './app-child.component.html',
  styleUrl: './app-child.component.css'
})
export class AppChildComponent {
  @Input()
  tittle:string;
  ngOnInit(){
    console.log(this.tittle);
  }
  @Output() Touch : EventEmitter<String> =new EventEmitter<String>();
   handleckick(){
    this.Touch.emit("button clicked");

  }



}
