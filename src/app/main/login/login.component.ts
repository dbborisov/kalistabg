import { User } from '@firebase/auth-types';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  isAuth  ;
  isUser:boolean;
  constructor(public auth: AuthService) {

    this.auth.appUser$.subscribe(e=>{
     this.isUser =  e?.name ? true :false;
     if(e){
      this.isAuth = e
     }
    })

    console.log(this.isUser)
  }

  ngOnInit() {}

  login() {
    this.auth.login();
  }

  logout() {
    this.auth.logout();
  }
}
