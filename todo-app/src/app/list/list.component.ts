import { Component, OnInit } from '@angular/core';
import { TodoModel } from 'src/todo.model';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  todos : TodoModel[] = [];

  constructor(private service : TodoService) { }

  ngOnInit(): void {
    this.service.todoByUser().then(() => this.todos);
  }

  delete(id : number) {
    this.service.deleteTodo(id);
  }
}
