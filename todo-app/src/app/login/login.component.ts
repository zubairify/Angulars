import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginModel } from 'src/login.model';
import { UserModel } from 'src/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  auth : LoginModel;

  constructor(private service : UserService, private router : Router) { 
    this.auth = new LoginModel();
  }

  ngOnInit(): void {}

  authenticate() {
    let user : UserModel;
    this.service.validateLogin(this.auth).then((result : UserModel) => {
      user = result;
      if(user != null) {
        localStorage.setItem("user", JSON.stringify(user));
        this.router.navigate(['add']);
      } else
        alert("Login failed! Invalid email/password");
    });
  }
}
