import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.less']
})
export class AddTodoComponent implements OnInit {
  title: string;

  constructor() { }

  ngOnInit() {
  }

}
