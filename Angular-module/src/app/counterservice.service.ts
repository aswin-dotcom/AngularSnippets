import { Injectable } from '@angular/core';

@Injectable()
export class CounterserviceService {

  constructor() { }
   count:number = 0;
  counter(component:string){
    console.log(component +" "+ ++this.count)
  }
}
