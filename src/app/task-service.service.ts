import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TaskModel } from './constants/taskModel';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {
  private tasksSubject: BehaviorSubject<TaskModel[]> = new BehaviorSubject<TaskModel[]>([]);
  tasks$: Observable<TaskModel[]> = this.tasksSubject.asObservable();

  constructor() { }

  addTask(taskName: string) {
    const tasks = this.tasksSubject.getValue();
    tasks.push({ name: taskName, completed: false });
    this.tasksSubject.next(tasks);
  }

  deleteTask(taskIndex: number) {
    const tasks = this.tasksSubject.getValue();
    if (taskIndex >= 0 && taskIndex < tasks.length) {
      tasks.splice(taskIndex, 1);
      this.tasksSubject.next(tasks);
    }
  }
  
  toggleTaskCompleted(taskIndex: number) {
    const tasks = this.tasksSubject.getValue();
    if (taskIndex >= 0 && taskIndex < tasks.length) {
      tasks[taskIndex].completed = !tasks[taskIndex].completed;
      this.tasksSubject.next(tasks);
    }
  }
}
