import { Component } from '@angular/core';
import { from, map, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'rxjs-operators';
  array = [1, 2, 3, 4, 5];
  array2 = [6, 7, 8, 9, 10];
  //creating observable using of operator
  myobervable = of(this.array, this.array2);
  myobservabl1 = from('aswin');
  // creating observale using from operator

  ngOnInit() {
    this.myobervable.subscribe({
      next: (val: any) => {
        console.log(val);
      },
      complete() {
        console.log('completed myobervable');
      },
    });
    this.myobservabl1.subscribe({
      next: (val: any) => {
        console.log(val);
      },
      complete() {
        {
          console.log('completed myobservabl1');
        }
      },
    });
  }
}
