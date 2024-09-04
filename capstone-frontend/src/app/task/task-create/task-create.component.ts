import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from '../task.service';
import { Task } from '../task.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.css']
})
export class TaskCreateComponent {
  task: Task = {
    title: '',
    description: '',
    status: 'Pending'
  };

  statuses: string[] = ['Pending', 'In Progress', 'Completed'];

  constructor(private taskService: TaskService, public router: Router) {}

  createTask(): void {
    this.taskService.createTask(this.task).subscribe(() => {
      this.router.navigate(['/tasks']);
    });
  }
}
