/* Angular Stuff */
import { Component, OnInit } from '@angular/core';

/* Our own stuff */
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  // styleUrls: ['./login.component.css']
})
export class AuthenticationComponent implements OnInit {

  constructor(public _authService: AuthService) { }

  ngOnInit(): void {
  }

}
