import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';  
import {User} from "./user/user";
import { DUMMY_USERS } from './dummy-users';
import { Tasks } from './tasks/tasks';
import { NgFor , NgIf } from  '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,  
  imports: [RouterOutlet , HeaderComponent , User , Tasks , NgFor , NgIf],  
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  users = DUMMY_USERS;
  selectedUserId?: string ;

  get selectedUser(){
    return this.users.find((user) => user.id === this.selectedUserId)!;
  }

  onSelectedUser(id: string){
      this.selectedUserId = id;
      
  }
}
