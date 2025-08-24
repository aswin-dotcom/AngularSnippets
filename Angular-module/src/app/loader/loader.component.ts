import { Component, inject } from '@angular/core';
import { CounterserviceService } from '../counterservice.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss'
})
export class LoaderComponent {
   counter: CounterserviceService = inject(CounterserviceService);
    ngOnInit() {
      this.counter.counter('loader');
    }
}
