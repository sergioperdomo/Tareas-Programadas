import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksComponent } from './tasks.component';
import { TasksService } from './service/tasks.service';


describe('TasksComponent', () => {

  let component: TasksComponent;
  let fixture: ComponentFixture<TasksComponent>;
  let tasksServiceSpy: jasmine.SpyObj<TasksService>;

  beforeEach(async () => {

    const spy = jasmine.createSpyObj('TasksService', [
      'getTasksUsers',
      'deleteTask'
    ]);

    await TestBed.configureTestingModule({
      imports: [TasksComponent],
      providers: [
        { provide: TasksService, useValue: spy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(TasksComponent);
    component = fixture.componentInstance;

    tasksServiceSpy = TestBed.inject(TasksService) as jasmine.SpyObj<TasksService>;

    // Set required inputs
    component.idUser = '123';
    component.nameTask = 'Test User';

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getTasksUsers with correct id', () => {
    tasksServiceSpy.getTasksByUser.and.returnValue([]);

    component.taksUserSelected;

    expect(tasksServiceSpy.getTasksByUser)
      .toHaveBeenCalledWith('123');
  });

  it('should call deleteTask when onFinishedTask is called', () => {
    component.onFinishedTask('task-1');

    expect(tasksServiceSpy.deleteTask)
      .toHaveBeenCalledWith('task-1');
  });

  it('should toggle showAddTask', () => {
    expect(component.showAddTask).toBeFalse();

    component.toggleAddTask();

    expect(component.showAddTask).toBeTrue();
  });

  it('should set showAddTask to false when closedModalNewTask is called', () => {
    component.showAddTask = true;

    component.closedModalNewTask();

    expect(component.showAddTask).toBeFalse();
  });

});
