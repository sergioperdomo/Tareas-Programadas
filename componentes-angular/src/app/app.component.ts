import { Component } from '@angular/core';
import { FAKE_USERS } from './fake-users';


@Component({
  selector: 'app-root',
  standalone: false,
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
