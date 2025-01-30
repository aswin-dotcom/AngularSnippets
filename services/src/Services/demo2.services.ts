import { Injectable } from "@angular/core";
import { subscribe } from "./learning.services";

@Injectable({
  providedIn: "root",  // this service can't in the module.ts
})
export class demo2{
  demo(){
    console.log("demo2 working");

  }


}

