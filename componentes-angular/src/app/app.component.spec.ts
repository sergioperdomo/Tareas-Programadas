import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent] // standalone
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app component', () => {
    expect(component).toBeTruthy();
  });

  it('should update userIdSelected when selectedUserId is called', () => {
    const fakeId = component.users[0].id;

    component.selectedUserId(fakeId);

    expect(component.userIdSelected).toBe(fakeId);
  });

  it('should return the correct user when userIdSelected is set', () => {
    const fakeUser = component.users[0];

    component.selectedUserId(fakeUser.id);

    expect(component.userSelected).toEqual(fakeUser);
  });

  it('should return undefined if no user is selected', () => {
    component.userIdSelected = undefined;

    const result = component.users.find(
      user => user.id === component.userIdSelected
    );

    expect(result).toBeUndefined();
  });

});
