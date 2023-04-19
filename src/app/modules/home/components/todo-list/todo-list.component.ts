import { Component } from '@angular/core';

// Interface
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {

public taskList: Array<TaskList> = [
  {task: "Minha nova Task",checked: true},
  {task: "Minha nova Task 2",checked: false}


];



}
