import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { user } from 'src/app/models/user';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  hide = true;
  public errorMsg = '';
  user = new user();
  public showprogressbar: boolean = false;

  constructor(
    private _router: Router
    , private auth: AuthenticationService
    ) { }

  ngOnInit() {
   
  }

  onSubmit(username: string, password: string) {
    this.showprogressbar = true;
    this.user.username = username;
    this.user.password = password;
    console.log("user details: " + this.user.username + this.user.password + this.user + "user");
    if (!this.auth.login(this.user.username, this.user.password)) {
      this.errorMsg = 'Failed to login';
    }

  }

}
