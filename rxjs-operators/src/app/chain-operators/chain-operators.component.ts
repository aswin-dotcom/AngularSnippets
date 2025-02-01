import { Component } from '@angular/core';
import { filter, from, map, pipe } from 'rxjs';

@Component({
  selector: 'app-chain-operators',
  templateUrl: './chain-operators.component.html',
  styleUrl: './chain-operators.component.css',
})
export class ChainOperatorsComponent {
  ///using pipe method we can write chaining of rxjs operators
  arrays = [1, 2, 3, 4, 5, 6];
  obs = from(this.arrays).pipe(
    map((Val) => {
      return Val * 10;
    }),filter((val)=>{
      return val>50;
    })
  );;


  ngOnInit() {
    this.obs.subscribe({
      next:(val:any)=>{
        console.log(val);
      },complete() {
        console.log("chain observable completed");
      },
    })
  }
}
