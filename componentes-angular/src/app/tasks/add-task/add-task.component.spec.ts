import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTaskComponent } from './add-task.component';
import { TasksService } from '../service/tasks.service';
import { FormsModule } from '@angular/forms';

describe('AddTaskComponent', () => {
  let component: AddTaskComponent;
  let fixture: ComponentFixture<AddTaskComponent>;
  let tasksServiceSpy: jasmine.SpyObj<TasksService>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('TasksService', ['addTask']);

    await TestBed.configureTestingModule({
      imports: [AddTaskComponent, FormsModule],
      providers: [{ provide: TasksService, useValue: spy }],
    }).compileComponents();

    fixture = TestBed.createComponent(AddTaskComponent);
    component = fixture.componentInstance;

    tasksServiceSpy = TestBed.inject(
      TasksService,
    ) as jasmine.SpyObj<TasksService>;

    // Required input
    component.idUser = '123';

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit closed when closedModalTask is called', () => {
    spyOn(component.closed, 'emit');

    component.closedModalTask();

    expect(component.closed.emit).toHaveBeenCalled();
  });

  it('should call addTask and emit closed on submitTask', () => {
    spyOn(component.closed, 'emit');

    component.titleEntered = 'Test title';
    component.sumamryEntered = 'Test summary';
    component.dateEntered = '2026-02-17';

    component.submitTask();

    expect(tasksServiceSpy.addTask).toHaveBeenCalledWith(
      {
        title: 'Test title',
        summary: 'Test summary',
        date: '2026-02-17',
      },
      '123',
    );

    expect(component.closed.emit).toHaveBeenCalled();
  });

  it('should close modal when escape key is pressed', () => {
    spyOn(component, 'closedModalTask');

    const event = new KeyboardEvent('keydown', { key: 'Escape' });

    component.handleEscape(event);

    expect(component.closedModalTask).toHaveBeenCalled();
  });
});
