import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';
import { ShowMenuService } from './services/show-menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'admin-panel';

  constructor(
    private _router: Router
    , public showmenu: ShowMenuService
    , private _auth: AuthenticationService
  ) { }

  userType: string | null = '';



  ngOnInit() {
    this.showmenu.hide();
    this._router.navigate(['Login/myform']);

    this._auth.userType.subscribe(value => this.userType = value);
  }


  logout() {
    this.showmenu.hide();
    this._router.navigate(['Login/myform']);
  }
}
