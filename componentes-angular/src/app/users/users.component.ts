import { Component } from '@angular/core';
import { FAKE_USERS } from '../fake-users';

const randomIndex = Math.floor(Math.random() * FAKE_USERS.length);

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
  public selectedUser = FAKE_USERS[randomIndex];

  get imageRute(){
    return '../../assets/fake-user-photos/' + this.selectedUser.avatar
  }

  changeUser(){
    const randomIndex = Math.floor(Math.random() * FAKE_USERS.length);
    this.selectedUser = FAKE_USERS[randomIndex];
  }
}
