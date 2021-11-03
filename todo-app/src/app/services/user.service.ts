import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay } from 'rxjs/operators';
import { LoginModel } from 'src/login.model';
import { UserModel } from 'src/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { 
  }

  async validateLogin(auth : LoginModel) {
    return await this.http.get<UserModel>("http://localhost:8880/login?email="
      + auth.email + "&passwd=" + auth.passwd).pipe(delay(1000)).toPromise();
  }

  createUser(user : UserModel) {
    this.http.post("http://localhost:8880/user", user).subscribe(data => data = user);
  }
}
