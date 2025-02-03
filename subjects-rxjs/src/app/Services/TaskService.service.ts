import { Component, EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";
@Injectable({
  providedIn:'root'
})
export class taskservice{
  CreateTask = new Subject<string>();
  oncreateTask(value:string){
   this.CreateTask.next(value);
   console.log(value,"service")

  }

}


