import { Component, inject } from '@angular/core';
import { taskservice } from '../Services/TaskService.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  tasklservice:taskservice = inject(taskservice)
  task:string='';
  handleclick(){
    this.tasklservice.oncreateTask(this.task)


  }



}
