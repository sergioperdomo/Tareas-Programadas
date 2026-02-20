import { Injectable } from '@angular/core';
import { NewInfoTask } from '../model/add-task.mode';
import { Task } from '../model/task.model';
import { BehaviorSubject, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private tasks: Task[] = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Dominar Angular',
      summary:
        'Aprender todas las características básicas y avanzadas de Angular y cómo aplicarlas.',
      dueDate: '2025-01-01',
      completed: false,
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Crear el primer prototipo',
      summary: 'Crear el primer prototipo del sitio web de la tienda',
      dueDate: '2025-11-05',
      completed: false,
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Preparar la plantilla del carrito',
      summary:
        'Preparar y describir una plantilla de carrito de compras de la tienda online',
      dueDate: '2025-05-16',
      completed: false,
    },
  ];

  private tasksSubject = new BehaviorSubject<Task[]>(this.tasks);
  tasks$ = this.tasksSubject.asObservable();

  constructor() {
    this.loadTasksFromLocalStorage();
    this.tasksSubject.next(this.tasks);
  }

  getTasksByUser(userId: string) {
    return this.tasks$.pipe(
      map((tasks) => tasks.filter((task) => task.userId === userId)),
    );
  }

  addTask(taskInfo: NewInfoTask, userId: string): void {
    const newTask: Task = {
      id: crypto.randomUUID(),
      userId: userId,
      title: taskInfo.title,
      summary: taskInfo.summary,
      dueDate: taskInfo.date,
      completed: false,
    };

    this.tasks = [...this.tasks, newTask];
    this.saveTasks();
  }

  toggleTaskCompletion(taskId: string): void {
    this.tasks = this.tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task,
    );

    this.saveTasks();
  }

  deleteTask(id: string): void {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.saveTasks();
  }

  private saveTasks(): void {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
    this.tasksSubject.next(this.tasks);
  }

  private loadTasksFromLocalStorage(): void {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      this.tasks = JSON.parse(storedTasks);
    }
  }
}
