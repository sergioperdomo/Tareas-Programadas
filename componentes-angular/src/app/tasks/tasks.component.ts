
import { Component, Input } from '@angular/core';

import { TasksService } from './service/tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: false,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss',
})
export class TasksComponent {
  @Input({ required: true }) idUser!: string;
  @Input({ required: true }) nameTask!: string;
  showAddTask: boolean = false;

  constructor(private taskService: TasksService) {}

  get taksUserSelected$() {
  return this.taskService.getTasksByUser(this.idUser);
}

  onFinishedTask(id: string) {
    this.taskService.deleteTask(id);
  }

  toggleAddTask() {
    this.showAddTask = !this.showAddTask;
  }

  closedModalNewTask() {
    this.showAddTask = false;
  }
}
