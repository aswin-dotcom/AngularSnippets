import { Component } from '@angular/core';
import { filter, from, map } from 'rxjs';

@Component({
  selector: 'app-tranform-data',
  templateUrl: './tranform-data.component.html',
  styleUrl: './tranform-data.component.css'
})
export class TranformDataComponent {
    myobervable2 = from([1, 2, 3, 4, 5]);
    transfromarr = this.myobervable2.pipe(
      map((val: number) => {
        return val * 5;
      })
    );

    filterobs = this.transfromarr.pipe(filter((val)=>{
      return val>=15;

    }))

    ngOnInit(){
      this.transfromarr.subscribe({
        next: (val: any) => {
          console.log(val);
        },
        complete() {
          console.log(' completed transfromarr');
        },
      });
      this.filterobs.subscribe({
        next:(val:any)=>{
          console.log(val);
        },complete(){
          console.log("filterobs completed");
        }
      })

    }

}
