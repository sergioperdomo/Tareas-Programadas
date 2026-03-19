import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from './model/users.model';
// import { CardComponent } from '../shared/card/card.component';


@Component({
  selector: 'app-users',
  standalone: false,
  // imports: [CardComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent {
  @Input() users!: User;
  @Input() selected!: boolean;
  @Output() userSelected = new EventEmitter<string>();

  get imageRute() {
    return '../../assets/fake-user-photos/' + this.users.avatar;
  }

  showInformationUser() {
    this.userSelected.emit(this.users.id);
  }
}
