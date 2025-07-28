import {
  Component,
  EventEmitter,
  HostListener,
  Output,
  signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss',
})
export class AddTaskComponent {
  @Output() closed = new EventEmitter<void>();

  public titleEntered: string = '';
  public sumamryEntered: string = '';
  public dateEntered: string = '';

  /* 
  SIGNAL CON LA VINCULACIÓN BIDIRECCIONAL -  Es básicamente llamar la variable en el HTML y poder cambiar su valor desde el HTML, es decir, que se actualice automáticamente en el componente TS.
  Esto se logra con el uso de la directiva ngModel, que permite la vinculación bidireccional entre el HTML y el componente TS.

  Un signal (es ractivo) es una varibale reactiva que informa automáticamente a Angular cuando su valor cambia, se usa en versiones de la 16 en adelante (16+).

  Cuando usamos signal, Angular sabe exactamente qué parte del DOM (HTML) depende de esa variable, entonces solo se actualiza esa parte específica, y no todo el componente. Esto hace que la aplicación sea más rápida y eficiente.

 

  public titleEntered = signal('');
  public sumamryEntered = signal('');
  public dateEntered = signal('');

   */

  closedModalTask() {
    this.closed.emit();
  }

  submitTask(){
    
  }

  @HostListener('document:keydown.escape', ['$event'])
  handleEscape(event: KeyboardEvent) {
    this.closedModalTask();
  }
}
