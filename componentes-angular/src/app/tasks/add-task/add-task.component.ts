import {
  Component,
  EventEmitter,
  HostListener,
  Output,
  signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewInfoTaks } from '../model/add-task.mode';

@Component({
  selector: 'app-add-task',
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss',
})
export class AddTaskComponent {
  @Output() closed = new EventEmitter<void>();
  @Output() createdTaskForm = new EventEmitter<NewInfoTaks>();

  public titleEntered: string = '';
  public sumamryEntered: string = '';
  public dateEntered: string = '';

  closedModalTask() {
    this.closed.emit();
  }

  submitTask() {
    this.createdTaskForm.emit({
      title: this.titleEntered,
      summary: this.sumamryEntered,
      date: this.dateEntered
    })
  }

  @HostListener('document:keydown.escape', ['$event'])
  handleEscape(event: KeyboardEvent) {
    this.closedModalTask();
  }
}
