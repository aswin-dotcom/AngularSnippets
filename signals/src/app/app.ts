import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('signals');
  counter = signal(0);
  doublecounter = computed(()=>this.counter()*2);
  message = signal<any[]>([]);
  constructor()
  {
    effect(()=>console.log(` effect called `))
  }
  increamet() {
    this.counter.update((val) => val + 1);
    this.message.update((pre) => [...pre, this.counter()]);
  }
  decrement() {
    this.counter.update((val) => val - 1);
    this.message.update((pre) => {
      pre.pop();
      return [...pre]
    });
  }
}
