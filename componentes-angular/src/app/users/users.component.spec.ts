import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersComponent } from './users.component';
import { User } from './model/users.model';

describe('UsersComponent', () => {

  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;

  const mockUser: User = {
    id: '1',
    name: 'Sergio',
    avatar: 'sergio.png'
  } as User;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersComponent] // standalone
    }).compileComponents();

    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;

    // Set required inputs
    component.users = mockUser;
    component.selected = false;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should build correct image path', () => {
    const expectedPath = '../../assets/fake-user-photos/sergio.png';

    expect(component.imageRute).toBe(expectedPath);
  });

  it('should emit user id when showInformationUser is called', () => {
    spyOn(component.userSelected, 'emit');

    component.showInformationUser();

    expect(component.userSelected.emit).toHaveBeenCalledWith('1');
  });

});
