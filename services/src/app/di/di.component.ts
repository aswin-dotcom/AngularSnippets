import { Component } from '@angular/core';
import { subscribe } from '../../Services/learning.services';

@Component({
  selector: 'app-di',
  templateUrl: './di.component.html',
  styleUrl: './di.component.css',
})
export class DIComponent {
  service: subscribe;
  constructor(service: subscribe) {
    this.service = service;
  }

  onclick() {
    this.service.onsubscribe('aswin samuvel');
  }
}
