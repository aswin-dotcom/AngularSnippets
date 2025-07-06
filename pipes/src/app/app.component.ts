import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'LOWERCASE';
  date = new Date();
  totalmarks = 500;
  marktaken = 100;
  filterstring:string =  'all';
  arr = [
    {name:'aswin',gender:'male'},
    {name:'vaizhya',gender:'female'},
    {name:'sherin',gender:'female'},
    {name:'edwin',gender:'male'},
    {name:'shanthi',gender:'female'},
  ]
}
