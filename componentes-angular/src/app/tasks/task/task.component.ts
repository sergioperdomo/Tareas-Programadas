import { Component, Input } from '@angular/core';
import { Task } from './model/task.model';
import { CardComponent } from '../../shared/card/card.component';
import { DatePipe } from '@angular/common';
import { TasksService } from '../service/tasks.service';

@Component({
  selector: 'app-task',
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;

  constructor(private taskService: TasksService) {}

  completeTask() {
    this.taskService.toggleTaskCompletion(this.task.id);
  }
  deleteTask() {
    this.taskService.deleteTask(this.task.id);
  }
}
