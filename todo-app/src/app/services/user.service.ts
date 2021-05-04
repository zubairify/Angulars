import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel } from 'src/login.model';
import { UserModel } from 'src/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUri : string = "http://localhost:8880";
  auth : LoginModel;
  user : UserModel;

  constructor(private http : HttpClient) { 
    this.auth = new LoginModel();
  }

  validateLogin() {
    return this.http.get<UserModel>(this.baseUri + "/login");
  }
}
