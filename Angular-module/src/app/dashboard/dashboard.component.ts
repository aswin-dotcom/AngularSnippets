import { Component, inject } from '@angular/core';
import { CounterserviceService } from '../counterservice.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
   counter: CounterserviceService = inject(CounterserviceService);
  ngOnInit() {
    this.counter.counter('lazy loaded dash component');
  }
}
