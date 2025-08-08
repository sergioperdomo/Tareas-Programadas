import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from './model/task.model';
import { CardComponent } from "../../shared/card/card.component";
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-task',
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;
  @Output() finishedTask = new EventEmitter<string>();

  completeTask(){
    this.finishedTask.emit(this.task.id);
  }

}
