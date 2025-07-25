import { Component, EventEmitter, Input, Output } from '@angular/core';

interface User {
  id: string;
  avatar: string;
  name: string;
}

/*
 type User = {

  id: string;
  avatar: string;
  name: string;
  }
*/

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent {
  /*
  @Input({ required: true}) users!: {
    id: string;
    avatar: string;
    name: string;
  }

  @Input({ required: true }) id!: string;
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string; // recibiendo información del componente padre
  */

  @Input() users!: User; // Viene con un array de objeto: [{id, name, avatar}]

  @Output() userSelected = new EventEmitter<string>(); // Enviar información al componente padre

  get imageRute() {
    return '../../assets/fake-user-photos/' + this.users.avatar;
  }

  showInformationUser() {
    this.userSelected.emit(this.users.id);
  }
}
