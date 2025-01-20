import { Component } from '@angular/core';

@Component({
  selector: 'app-grandchildren',
  templateUrl: './grandchildren.component.html',
  styleUrl: './grandchildren.component.css'
})
export class GrandchildrenComponent {
  ngOnInit(){
    console.log("ngOninit working After ngONChanges");
  }
  ngDoCheck(){
    console.log("ngDoCheck runs  in every angular lifecycle hooks but after ngOninIt()");
  }



}
