import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../task.service';
import { Task } from '../task.model';

@Component({
  selector: 'app-task-update',
  templateUrl: './task-update.component.html',
  styleUrls: ['./task-update.component.css']
})
export class TaskUpdateComponent implements OnInit {
  task: Task = {
    title: '',
    description: '',
    status: 'Pending'
  };

  statuses: string[] = ['Pending', 'In Progress', 'Completed'];

  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService,
    public router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.taskService.getTaskById(id).subscribe((data) => {
      this.task = data;
    });
  }

  updateTask(): void {
    if (this.task.id) {
      this.taskService.updateTask(this.task.id, this.task).subscribe(() => {
        this.router.navigate(['/tasks']);
      });
    }
  }
}
