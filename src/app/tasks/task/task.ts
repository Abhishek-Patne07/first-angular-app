import { Component,  Input,  inject } from '@angular/core';
import { DatePipe } from '@angular/common';
import { type Task } from './task.model';
import { Card } from "../../shared/card/card";
// import { TasksService } from '../../tasks.service';   

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [Card, DatePipe],
  templateUrl: './task.html',
  styleUrls: ['./task.css']
})
export class TaskComponent {
onCompleteTask() {
throw new Error('Method not implemented.');
}
  @Input({ required: true }) task!: Task;


  // private tasksService = inject(TasksService);

  // onCompleteTask() {
  //   this.tasksService.removeTask(this.task.id);

  // }
}
