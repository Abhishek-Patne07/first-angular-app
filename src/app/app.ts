import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';  
import {User} from "./user/user";


@Component({
  selector: 'app-root',
  standalone: true,   // make sure this is standalone
  imports: [RouterOutlet, HeaderComponent , User],  
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('first-angular-app');
}
