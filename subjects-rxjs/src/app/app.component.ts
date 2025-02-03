import { Component } from '@angular/core';
import { taskservice } from './Services/TaskService.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[taskservice]
})
export class AppComponent {
  title = 'subjects-rxjs';
}
