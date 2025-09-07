import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task';
import { Title } from '@angular/platform-browser';
import { type NewTaskData } from './task/task.model';
import { NewTask } from "./new-task/new-task";
import { TaskService } from './tasks.service';

// If Task is not a component, remove it from the imports array below.


@Component({
  selector: 'app-tasks',
  // imports: [ Task ],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
  imports: [TaskComponent, TaskComponent, NewTask]
})
export class Tasks {
  @Input({required: true}) userId!: string;
  @Input({required: true}) name!: string;
  isAddingTask:boolean = false;


  constructor(private tasksService: TaskService){
   
  }

get selectedUserTasks(){
  return  this.tasksService.getUserTasks(this.userId);
}

onCompleteTask(id: string){

}


onStartAddTask(){
   this.isAddingTask = true;
}

onCancelAddTask(){
  this.isAddingTask = false;
}



}
