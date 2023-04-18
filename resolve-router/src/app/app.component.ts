import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'resolve-router';

  constructor(private router: Router) { }

  main() {
    this.router.navigate(['']);
  }

  sub() {
    this.router.navigate(['/student-list']);
  }
}
