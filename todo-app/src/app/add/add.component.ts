import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoModel } from 'src/todo.model';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  todo : TodoModel;

  constructor(private service : TodoService, private router : Router) { 
    this.todo = new TodoModel();
  }

  ngOnInit(): void {
  }

  saveTodo() {
    this.service.createTodo(this.todo);
    this.router.navigate(['list']);
  }
}
