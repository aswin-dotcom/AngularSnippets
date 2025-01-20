import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lifecycle-class-in-angular';
  show:boolean=true;
  handleclick(){
    this.show=!this.show;
  }
}
