/* Angular Stuff */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

/* Third party */
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject } from 'rxjs';

/* Our own stuff */
import { user } from 'src/app/auth/models/user';
import { url } from '../config';
import { BaseDataService } from './base-data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private serverPath = url.apiUrl;

  user = new user;
  userType: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(this.getUserType());

  constructor(
    private _router: Router
    , private _toastr: ToastrService
    , private http: HttpClient
    , private apiService: BaseDataService

  ) { }

  getUserType() {
    return localStorage.getItem('user')
  }


  get isLoggedIn() {
    return true;
  }


  get isSuperAdmin() {
    if (this.user.username === "admin") {
      return true;
    } else {
      return false;
    }
  }

  // login(username: string, password: string): any {
  //   this.user.username = username;
  //   this.user.password = password;

  //   let authenticatedUser = users.find(u => u.username === this.user.username);
  //   if (authenticatedUser && authenticatedUser.password == this.user.password) {

  //     localStorage.setItem("user", this.user.username);
  //     this.userType.next(this.user.username);

  //     this._router.navigate(['main']);
  //   }

  //   else {
  //     return this._toastr.warning("Please Enter Valid Username or Password!", "Warning");
  //   }
  // }

  loginUser(user: any) {
    return this.apiService.save<any>(this.serverPath + 'login', user)
  }

  registerUSer(email: string, password: string, username: string) {
    // firebase.auth().createUserWithEmailAndPassword(email, password)
    //   .catch(
    //   error => console.log(error)
    //   )
  }


}
