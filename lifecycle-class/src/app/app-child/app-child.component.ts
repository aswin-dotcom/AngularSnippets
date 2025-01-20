import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-app-child',
  templateUrl: './app-child.component.html',
  styleUrl: './app-child.component.css'
})
export class AppChildComponent {

  @Input() Answer!:string;
  ngOnChanges(changes:SimpleChanges){
    console.log(changes);

  }
  ngOnInit(){
    console.log("ngOninit working After ngONChanges");
  }
  ngDoCheck(){
    console.log("ngDoCheck runs  in every angular lifecycle hooks but after ngOninIt()");
  }

  ngAfterContentInit(){
    console.log("ngAfterContentInit hoosk called after the view child and view children decorator are initialized and projected content passed from the parent component this lifecycle hooks gets called only one time in the change detection cycle after ngDoCheck");
  }

  ngAfterContentChecked(){
    console.log("ngAfterContentChecked hoosk called after the view child and view children decorator are initialized and changed it is called after the each change detection cycle like doCheck")
  }
  ngAfterViewInit(){
    console.log(" ngAfterViewInit gets executed when all of its child component and its lifecyclehooks gets executed initiallly ")
  }
  ngAfterViewChecked(){
    console.log(" ngAfterViewChecked gets executed when all of its child component and its lifecyclehooks gets executed initiallly in all lifecycle hooks")
  }
  ngOnDestroy(){
    console.log("this hook is called destroying component's view from the dom all lifecycle hooks")
  }



}
