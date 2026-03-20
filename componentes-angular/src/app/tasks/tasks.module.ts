import { NgModule } from '@angular/core';
import { AddTaskComponent } from './add-task/add-task.component';
import { TaskComponent } from './task/task.component';
import { TasksComponent } from './tasks.component';
import { SharedModule } from '../shared/shared.module';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TasksComponent, TaskComponent, AddTaskComponent],
  exports: [TasksComponent], // Exportamos el componente principal del modulo, para que pueda ser utilizado en otros modulos
  imports: [SharedModule, DatePipe, CommonModule, FormsModule]
})
export class TasksModule {}
