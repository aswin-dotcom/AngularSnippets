import { Component } from '@angular/core';
import { subscribe } from '../Services/learning.services';
import { demo2 } from '../Services/demo2.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[subscribe]
})
export class AppComponent {
  title = 'services';
  constructor(private demo:demo2){

  }
  handleclick(){
    let obj = new subscribe();
    obj.onsubscribe('Aswin');
    this.demo.demo();



  }
}
