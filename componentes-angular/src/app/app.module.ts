import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { UsersComponent } from './users/users.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule, DatePipe } from '@angular/common';
import { AddTaskComponent } from './tasks/add-task/add-task.component';
import { TaskComponent } from './tasks/task/task.component';
import { FormsModule } from '@angular/forms';
import { TasksComponent } from './tasks/tasks.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    UsersComponent,
    TasksComponent,
    TaskComponent,
    AddTaskComponent,
  ], // Registro de componentes no independientes (Mediante modulos)
  bootstrap: [AppComponent],
  imports: [BrowserModule, DatePipe, CommonModule, FormsModule, SharedModule], // Componentes independientes
})
export class AppModule {}
