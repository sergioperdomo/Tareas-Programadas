import { NgModule } from '@angular/core';
import { LOCALE_ID } from '@angular/core';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { UsersComponent } from './users/users.component';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './shared/shared.module';
import { TasksModule } from './tasks/tasks.module';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    UsersComponent,
  ], // Registro de componentes no independientes (Mediante modulos)
  bootstrap: [AppComponent],
  imports: [BrowserModule, DatePipe, SharedModule, TasksModule], // Componentes independientes
  providers: [{ provide: LOCALE_ID, useValue: 'es' }] // Configuración de la localización a español
})
export class AppModule {}
