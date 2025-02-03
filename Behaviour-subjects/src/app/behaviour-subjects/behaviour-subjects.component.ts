import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-behaviour-subjects',
  templateUrl: './behaviour-subjects.component.html',
  styleUrl: './behaviour-subjects.component.css'
})
export class BehaviourSubjectsComponent {
  ngOnInit(){
    var behavioursubject =  new BehaviorSubject(100);//this is the initial vaslue for all the subscribers 
     behavioursubject.subscribe((value)=>{
      console.log(value);
     })//100
     behavioursubject.subscribe((value)=>{
      console.log(value);
     })//100

     behavioursubject.next(1000);
     behavioursubject.subscribe((value)=>{
      console.log(value)
     })



  }

}
