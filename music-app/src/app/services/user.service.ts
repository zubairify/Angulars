import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel } from 'src/login.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users : LoginModel[] = [];

  constructor(private http : HttpClient) { 
    this.http.get<LoginModel[]>('../assets/users.json').subscribe(data => this.users = data);
    console.log(this.users);
  }

  validate(login : LoginModel) {
    return this.users.find(x => x.userid == login.userid && x.passwd == login.passwd)
  }
}
