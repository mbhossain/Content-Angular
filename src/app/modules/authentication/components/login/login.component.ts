/* Angular Stuff */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

/* 3rd party libraries */

/* Our own stuff */
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginUserData = {
    email: null,
    password: null
  }

  constructor(
    private _auth: AuthService
    , private _router: Router) { }

  ngOnInit(): void {
  }

  loginUser() {
    this._auth.loginUser(this.loginUserData)
      .subscribe(
        res => {
          localStorage.setItem('token', res.token);
          this._router.navigate(['/authentication/special']);
        },
        err => console.log(err)
      )
  }

}
