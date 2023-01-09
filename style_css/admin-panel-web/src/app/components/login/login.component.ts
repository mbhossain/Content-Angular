/* Angular Stuff */
import { Component } from '@angular/core';
import { Router } from '@angular/router';

/* Third party */
import { ToastrService } from 'ngx-toastr';

/* Our own stuff */
import { user } from 'src/app/models/user';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public hide = true;
  public errorMsg = '';
  public user = new user();
  public showprogressbar: boolean = false;

  constructor(
    private _router: Router
    , private _auth: AuthenticationService
    , private _toastr: ToastrService
  ) { }

  ngOnInit() {

  }

  onSubmit() {

    console.log('this.user:', this.user)
    this.showprogressbar = true;
    
    // this.user.username = username;
    // this.user.password = password;
    // console.log("user details: " + this.user.username + this.user.password + this.user + "user");
    // if (!this.auth.login(this.user.username, this.user.password)) {
    //   this.errorMsg = 'Failed to login';
    // }

    this._auth.loginUser(this.user)
      .subscribe(
        res => {
          console.log('res:', res);
          localStorage.setItem('token', res.token);
          this._router.navigate(['main']);
        },
        err => {
          console.log(err);
          // return this._toastr.warning("Please Enter Valid Username or Password!", "Warning");
        }
      )

  }

}
