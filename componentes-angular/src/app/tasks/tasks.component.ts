import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';


@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss',
})
export class TasksComponent {
  @Input({ required: true }) nameTask!: string;
}
