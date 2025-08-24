import { Component, inject } from '@angular/core';
import { CounterserviceService } from './counterservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [CounterserviceService],
})
export class AppComponent {
  title = 'Angular-module';
  counter: CounterserviceService = inject(CounterserviceService);
  ngOnInit() {
    this.counter.counter('app');
  }
}
