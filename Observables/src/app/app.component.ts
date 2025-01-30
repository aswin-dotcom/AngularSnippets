import { Component } from '@angular/core';
import { observable, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Observables';
  data: any = [];
  myObservables = new Observable((observer) => {
    observer.next([1, 2, 3, 4, 5]);
  });
  ngOnInit() {
    this.getAsyncData();
    // this.getAsyncDataStream();
    this.getobservablesignals();
  }
  getAsyncData() {
    this.myObservables.subscribe((val: any) => {
      this.data = val;
      console.log(this.data);
    });
  }

  observerer are youtube channel subscribe can subscribe to it

    obervable = new Observable((observer) => {
      observer.next(1);
      observer.next(2);
      observer.next(3);
      observer.next(4);
      observer.next(5);
    });
    getAsyncDataStream(){
      setInterval(()=>{
        this.obervable.subscribe((data:any)=>{
          console.log(data);

        })
    },3000)
  }

  oops = new Observable((observer) => {
    observer.next('observer is working');

    observer.complete();
  });
  getobservablesignals() {
    this.oops.subscribe({
      next:(data:any)=>{
        console.log(data)
      },error:(err)=>{
        console.log(err);
      },complete(){
        alert('data transmission completed');

      }
    });
  }
}
