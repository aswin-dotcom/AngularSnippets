import { Component, inject } from '@angular/core';
import { taskservice } from '../Services/TaskService.service';
import { NewTaskComponent } from '../new-task/new-task.component';

@Component({
  selector: 'app-show-task',
  templateUrl: './show-task.component.html',
  styleUrl: './show-task.component.css',
  providers:[NewTaskComponent]
})
export class ShowTaskComponent {
  tasks:string[]=['task-1','task-2','task-3']
  taskservice:taskservice =  inject(taskservice);


  ngOnInit(){
    this.taskservice.CreateTask.subscribe((value)=>{
      this.tasks.push(value);

    })

  }

}
