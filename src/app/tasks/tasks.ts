import { Component, Input } from '@angular/core';
import { TaskComponent } from './task//task';
import { Title } from '@angular/platform-browser';
import { useRevalidator } from 'react-router-dom';
import { NewTask } from "./new-task/new-task";
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
  iaAddingTask = false;

tasks = [
  {
    id: 't1',
    userId: 'u1',
    title: 'Master Angular',
    summary:
      'Learn all the basic and advanced features of Angular & how to apply them.',
    dueDate: '2025-12-31',
  },
  {
    id: 't2',
    userId: 'u3',
    title: 'Build first prototype',
    summary: 'Build a first prototype of the online shop website',
    dueDate: '2024-05-31',
  },
  {
    id: 't3',
    userId: 'u3',
    title: 'Prepare issue template',
    summary:
      'Prepare and describe an issue template which will help with project management',
    dueDate: '2024-06-15',
  },
];

get selectedUserTasks(){
  return this.tasks.filter((tasks) => tasks.userId === this.userId);
}

onCompletetask(id: string){
  this.tasks = this.tasks.filter((task) => task.id !== id)
}

onStartAddTask(){
   this.iaAddingTask = true;
}
}
