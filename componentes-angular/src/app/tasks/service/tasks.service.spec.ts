import { TestBed } from '@angular/core/testing';
import { firstValueFrom } from 'rxjs';
import { TasksService } from './tasks.service';
import { Task } from '../model/task.model';

describe('TasksService', () => {
  let service: TasksService;

  const mockTasks: Task[] = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Task 1',
      summary: 'Summary 1',
      dueDate: '2026-01-01',
      completed: false,
    },
    {
      id: 't2',
      userId: 'u2',
      title: 'Task 2',
      summary: 'Summary 2',
      dueDate: '2026-01-02',
      completed: false,
    },
  ];

  beforeEach(() => {
    localStorage.clear();

    TestBed.configureTestingModule({
      providers: [TasksService],
    });

    localStorage.setItem('tasks', JSON.stringify(mockTasks));

    service = TestBed.inject(TasksService);
  });

  afterEach(() => {
    localStorage.clear();
  });

  describe('Service initialization', () => {
    it('should be created', () => {
      expect(service).toBeTruthy();
    });

    it('should load tasks from localStorage', async () => {
      const tasks = await firstValueFrom(service.getTasksByUser('u1'));

      expect(tasks.length).toBe(1);
      expect(tasks[0].title).toBe('Task 1');
    });
  });

  describe('getTasksByUser', () => {
    it('should return only tasks for the specified user', async () => {
      const tasks = await firstValueFrom(service.getTasksByUser('u2'));

      expect(tasks.length).toBe(1);
      expect(tasks.every((t) => t.userId === 'u2')).toBeTrue();
    });
  });

  describe('addTask', () => {
    it('should add a new task and persist it', async () => {
      spyOn(localStorage, 'setItem').and.callThrough();

      service.addTask(
        {
          title: 'Nueva tarea',
          summary: 'Resumen prueba',
          date: '2026-02-17',
        },
        'u3',
      );

      const tasks = await firstValueFrom(service.getTasksByUser('u3'));

      expect(tasks.length).toBe(1);
      expect(tasks[0].title).toBe('Nueva tarea');
      expect(localStorage.setItem).toHaveBeenCalled();
    });
  });

  describe('deleteTask', () => {
    it('should delete an existing task and update localStorage', async () => {
      spyOn(localStorage, 'setItem').and.callThrough();

      const tasksBefore = await firstValueFrom(service.getTasksByUser('u1'));

      const taskId = tasksBefore[0].id;

      service.deleteTask(taskId);

      const tasksAfter = await firstValueFrom(service.getTasksByUser('u1'));

      expect(tasksAfter.find((t) => t.id === taskId)).toBeUndefined();
      expect(localStorage.setItem).toHaveBeenCalled();
    });
  });

  describe('toggleTaskCompletion', () => {
    it('should toggle the completed state of a task', async () => {
      const tasksBefore = await firstValueFrom(service.getTasksByUser('u1'));

      const taskId = tasksBefore[0].id;
      const initialState = tasksBefore[0].completed;

      service.toggleTaskCompletion(taskId);

      const tasksAfter = await firstValueFrom(service.getTasksByUser('u1'));

      expect(tasksAfter[0].completed).toBe(!initialState);
    });
  });
});
