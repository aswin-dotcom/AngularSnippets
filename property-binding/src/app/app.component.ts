import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'property-binding';
  bg:string='red';
  show:Boolean=false

  handleclick(){
    if(this.bg=='red')
    {
      this.bg='black';

    }
    else{
      this.bg='red'
    }

  }

  handleclick1(){
    this.show=!this.show;

  }
}
