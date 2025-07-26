import { Component, Input } from '@angular/core';
import { AppHeaderComponent } from './app-header/app-header.component';
import { UsersComponent } from './users/users.component';
import { FAKE_USERS } from './fake-users';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './tasks/tasks.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AppHeaderComponent, UsersComponent, CommonModule, TaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  public users = FAKE_USERS;
  public userIdSelected?: string;

  get userSelected(){
    return this.users.find((user) => user.id === this.userIdSelected)!;
  }

  selectedUserId(id: string) {
    this.userIdSelected = id;
  }
}
