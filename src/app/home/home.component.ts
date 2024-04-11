import { Component } from '@angular/core';
import { TaskServiceService } from '../task-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  newTask: string = '';

  constructor(private taskService: TaskServiceService) {}

  addTask() {
    if (this.newTask.trim() !== '') {
      this.taskService.addTask(this.newTask);
      this.newTask = '';
    }
  }
}
