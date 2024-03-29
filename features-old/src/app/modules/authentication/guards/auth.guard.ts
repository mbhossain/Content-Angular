/* Angular Stuff */
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

/* 3rd party libraries */

/* Our own stuff */
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private _authService: AuthService
    , private _router: Router
  ) { }

  canActivate(): boolean {
    if (this._authService.loggedIn()) {
      return true
    } else {
      this._router.navigate(['/authentication/login']);
      return false
    }
  }

}
