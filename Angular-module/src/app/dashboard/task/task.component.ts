import { Component, inject } from '@angular/core';
import { CounterserviceService } from '../../counterservice.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {
    counter: CounterserviceService = inject(CounterserviceService);
    ngOnInit() {
      debugger
      this.counter.counter('lazy loaded task component');
    }
}
