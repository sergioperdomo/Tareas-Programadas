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
  @Input({ required: true }) idUser!: string;
  @Input({ required: true }) nameTask!: string;

  fakeTasks = [
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

  get taksUserSelected(){
    return this.fakeTasks.filter((task) => task.idUsuario === this.idUser)
  }

  onFinishedTask(id: string){
    this.fakeTasks = this.fakeTasks.filter((task) => task.id !== id);
    // .filter() creates a new array with all elments that pass the test implemented by the provided function.
  }

}
