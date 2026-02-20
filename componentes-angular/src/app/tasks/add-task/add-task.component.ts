import { TasksService } from './../service/tasks.service';
import {
  Component,
  EventEmitter,
  HostListener,
  inject,
  Input,
  Output,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss',
})
export class AddTaskComponent {
  @Input({ required: true }) idUser!: string;
  @Output() closed = new EventEmitter<void>();

  public titleEntered: string = '';
  public sumamryEntered: string = '';
  public dateEntered: string = '';

  private taskService = inject(TasksService);

  closedModalTask() {
    this.closed.emit();
  }

  submitTask() {
    this.taskService.addTask(
      {
        title: this.titleEntered,
        summary: this.sumamryEntered,
        date: this.dateEntered,
      },
      this.idUser,
    );
    this.closed.emit();
  }

  @HostListener('document:keydown', ['$event'])
  handleEscape(event: KeyboardEvent): void {
    if (event.key !== 'Escape') return;
    this.closedModalTask();
  }
}
