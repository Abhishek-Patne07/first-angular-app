import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type Task } from './task.model';

@Component({
  selector: 'app-task',
  standalone: true, // ✅ if you’re using standalone components
  imports: [],
  templateUrl: './task.html',
  styleUrls: ['./task.css'] // ✅ plural form
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;
  @Output() complete = new EventEmitter<string>();

  onCompleteTask() {
    this.complete.emit(this.task.id);
  }
}
