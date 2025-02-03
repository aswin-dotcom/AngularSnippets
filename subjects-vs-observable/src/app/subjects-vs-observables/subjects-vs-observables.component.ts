import { Component } from '@angular/core';
import { Observable, Subject, Subscriber } from 'rxjs';

@Component({
  selector: 'app-subjects-vs-observables',
  templateUrl: './subjects-vs-observables.component.html',
  styleUrl: './subjects-vs-observables.component.css',
})
export class SubjectsVsObservablesComponent {
  ngOnInit() {
    const subject =  new Subject();

    let obs = new Observable((observer) => {
      observer.next(Math.random());
    });
    obs.subscribe((value) => {
      console.log(value,'from the observable');//0.82315565159812

    });
    obs.subscribe((value) => {
      console.log(value,'from the observable');//);//0.5618628648662316
    });
     // observables not emit the same value for all the Subscriber

    subject.subscribe((value)=>{
      console.log(value,'from the subject');
    })
    subject.subscribe((value)=>{
      console.log(value,'from the subjec');
    })
    subject.next(Math.random());

    // First Subscription is created.
    // Second Subscription is created.
    // subject.next(Math.random()) emits a value.
    // Both subscribers receive and log the emitted value.
    // If subject.next(Math.random()) were placed before the subscriptions, they wouldn't receive anything because a Subject does not store past values like a BehaviorSubject.

  }
}
