import { Component, inject } from '@angular/core';
import { CounterserviceService } from '../../counterservice.service';

@Component({
  selector: 'app-stat',
  templateUrl: './stat.component.html',
  styleUrl: './stat.component.scss',
})
export class StatComponent {
  counter: CounterserviceService = inject(CounterserviceService);
  ngOnInit() {
    this.counter.counter('lazy loaded stat component');
  }
}
