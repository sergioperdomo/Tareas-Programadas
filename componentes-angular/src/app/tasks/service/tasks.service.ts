import { Injectable } from '@angular/core';
import { NewInfoTaks } from '../model/add-task.mode';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private fakeTasks = [
    {
      id: 't1',
      idUsuario: 'u1',
      titulo: 'Dominar Angular',
      resumen:
        'Apreder todas las características básicas y avanzasAngular cómo apicarlas.',
      expira: '2025-01-01',
    },
    {
      id: 't2',
      idUsuario: 'u3',
      titulo: 'Crear el primer prototipo',
      resumen: 'Crear el primer prototipo del sitio web de la tienda',
      expira: '2025-11-05',
    },
    {
      id: 't3',
      idUsuario: 'u3',
      titulo: 'Preparar la plantilla del carrito',
      resumen:
        'Preparar y describir una plantilla de carrito de compras de la tienda online',
      expira: '2025-05-16',
    },
  ];

  constructor(){
    const taks = localStorage.getItem('taks');
    if(taks){
      this.fakeTasks = JSON.parse(taks);
    }
  }

  getTasksUsers(idUser: string) {
    return this.fakeTasks.filter((task) => task.idUsuario === idUser);
  }

  addTask(taskInfo: NewInfoTaks, idUser: string) {
    this.fakeTasks.push({
      id: Math.random().toString(),
      idUsuario: idUser,
      titulo: taskInfo.title,
      resumen: taskInfo.summary,
      expira: taskInfo.date,
    });
    this.addTasksToLocalStorage();
  }

  deleteTask(id: string) {
    this.fakeTasks = this.fakeTasks.filter((task) => task.id !== id);
    // .filter() creates a new array with all elments that pass the test implemented by the provided function.
    this.addTasksToLocalStorage();
  }

  addTasksToLocalStorage(){
    localStorage.setItem('taks', JSON.stringify(this.fakeTasks));
  }
}
