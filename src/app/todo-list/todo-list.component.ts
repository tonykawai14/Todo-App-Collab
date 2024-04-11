import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskServiceService } from '../task-service.service';
import { TaskModel } from '../constants/taskModel';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  tasks$: Observable<TaskModel[]> | undefined;

  constructor(private taskService: TaskServiceService) { 
    this.tasks$ = this.taskService.tasks$;
  }

  toggleCompleted(taskIndex: number) {
    this.taskService.toggleTaskCompleted(taskIndex);
  }

  deleteTask(taskIndex: number) {
    this.taskService.deleteTask(taskIndex);
  }
}
