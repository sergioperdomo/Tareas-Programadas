import { Component } from '@angular/core';
import { AppHeaderComponent } from './app-header/app-header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AppHeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'componentes-angular';
}
