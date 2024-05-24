import { Component } from '@angular/core';

@Component({
  selector: 'app-my-tasks',
  templateUrl: './my-tasks.component.html',
  styleUrls: ['./my-tasks.component.scss']
})
export class MyTasksComponent {
  public value: string = 'This is the Task Name';
  public value1: string = 'This is a sample description of a task. It should have the most important things that should be achieved.';
}
