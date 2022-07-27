import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  template: `
  <h2>{{name}}</h2>
  <h3 class="text-success">Test Feature</h3>
  <h3 [class]="successClass">Test Feature</h3>

  <h3 class="text-special" [class]="successClass">Test Feature</h3>
  <h3 [class.text-danger]="hasError">Test Feature</h3>

  <h3 [ngClass]="messageClasses">Test Feature</h3>
  `,
  styles: [`
  .text-success {
    color: green;
  }
  .text-danger {
    color: red;
  }
  .text-special {
    font-style: italic;
  }
  `]
})
export class ComponentStylingComponent implements OnInit {
  public name = 'Class Binding';
  public successClass = 'text-success';
  public hasError = true;
  public isSpecial = true;
  public messageClasses = {
    'text-success': !this.hasError,
    'text-danger': this.hasError,
    'text-special': this.isSpecial
  }

  constructor() { }

  ngOnInit(): void {
  }

}
