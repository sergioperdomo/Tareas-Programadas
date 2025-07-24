import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent {
  @Input({ required: true }) id!: string;
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string; // recibiendo información del componente padre

  @Output() userSelected = new EventEmitter(); // Enviar información al componente padre

  get imageRute() {
    return '../../assets/fake-user-photos/' + this.avatar;
  }

  showInformationUser() {
    this.userSelected.emit(this.id);
  }
}
