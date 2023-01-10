/* Angular Stuff */
import { Component } from '@angular/core';
import { Router } from '@angular/router';

/* Third party */
import { ToastrService } from 'ngx-toastr';
import { MatDialog, MatDialogRef } from "@angular/material/dialog";

/* Our own stuff */
import { user } from 'src/app/auth/models/user';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { RegisterComponent } from '../register/register.component';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public registerDialogRef!: MatDialogRef<RegisterComponent>;
  public forgetPasswordDialogRef!: MatDialogRef<ForgotPasswordComponent>;
  public name: string = "";

  public hide = true;
  public errorMsg = '';
  public user = new user();
  public showprogressbar: boolean = false;

  constructor(
    private _router: Router
    , private _auth: AuthenticationService
    , private _toastr: ToastrService
    , private _matDialog: MatDialog
  ) { }

  openModal() {
    this.registerDialogRef = this._matDialog.open(RegisterComponent, {
      data: { name: this.name },
      disableClose: true
    });

    this.registerDialogRef.afterClosed().subscribe(res => {
      if ((res == true)) {
        this.name = "";
      }
    });
  }

  forgotPassWord() {
    this.forgetPasswordDialogRef = this._matDialog.open(ForgotPasswordComponent, {
      data: { name: this.name },
      disableClose: true
    });

    this.forgetPasswordDialogRef.afterClosed().subscribe(res => {
      if ((res == true)) {
        this.name = "";
      }
    });
  }

  ngOnInit() {

  }

  onSubmit() {
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
          localStorage.setItem('token', res.token);
          this._router.navigate(['main']);
        },
        err => {
          return this._toastr.error(err.statusText ? err.statusText : 'Please Enter Valid Username or Password!', "Error");
        }
      )

  }

}
