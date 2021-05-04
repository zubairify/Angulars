import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TodoModel } from 'src/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private baseUri : string = "http://localhost:8880/todo";
  
  constructor(private http : HttpClient) { }

  createTodo(todo : TodoModel) {
    this.http.post(this.baseUri, todo).subscribe(data => data = todo);
  }

  todoById(id : number) {
    return this.http.get<TodoModel>(this.baseUri+"/" + id);
  }

  todoByUser(userid : number) {
    return this.http.get<TodoModel[]>(this.baseUri+"/user/" + userid);
  }
}
