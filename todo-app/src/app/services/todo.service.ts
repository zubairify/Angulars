import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TodoModel } from 'src/todo.model';
import { UserModel } from 'src/user.model';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private baseUri : string = "http://localhost:8880/todo";
  
  constructor(private http : HttpClient) { }

  createTodo(todo : TodoModel) {
    let user : UserModel;
    user = JSON.parse(localStorage.getItem('user'));
    this.http.post(this.baseUri + "/" + user.userid, todo).subscribe(data => data = todo);
  }

  todoById(id : number) {
    return this.http.get<TodoModel>(this.baseUri+"/" + id);
  }

  async todoByUser() {
    let user : UserModel;
    user = JSON.parse(localStorage.getItem('user'));
    return await this.http.get<TodoModel[]>(this.baseUri+"/user/" + user.userid)
      .pipe(delay(100)).toPromise();
  }

  deleteTodo(id : number) {
    // logic to delete todo on backend
  }
}
