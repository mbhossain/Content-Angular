import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { user } from '../models/user';

let users = [new user('admin', '123'), new user('manager', '123')];

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  user = new user;
  userType: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(this.getUserType());

  constructor(private _router: Router) { }

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



  login(username: string, password: string): any {
    this.user.username = username;
    this.user.password = password;

    let authenticatedUser = users.find(u => u.username === this.user.username);
    if (authenticatedUser && authenticatedUser.password == this.user.password) {

      localStorage.setItem("user", this.user.username);
      this.userType.next(this.user.username);

      this._router.navigate(['/Admin']);
    }

    else {
      alert("Please Enter Valid Username/Password..!!");
    }
  }
}
