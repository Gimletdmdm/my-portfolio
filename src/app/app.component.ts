import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RouterLink, RouterOutlet } from '@angular/router';

import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    RouterLink,
    RouterOutlet,
    HeaderComponent
  ]
})
export class AppComponent {

  constructor() {
    console.log(environment.production);
  }
}
