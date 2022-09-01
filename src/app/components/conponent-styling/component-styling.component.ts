/* Angular Stuff */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  template: `
  <h3>{{name}}</h3>
  <hr>
  <h5 class="text-success">Test Feature</h5>
  <h5 [class]="successClass">Test Feature</h5>

  <h5 class="text-special" [class]="successClass">Test Feature</h5>
  <h5 [class.text-danger]="hasError">Test Feature</h5>

  <h5 [ngClass]="messageClasses">Test Feature</h5>

  <h3>Style Binding</h3>
  <hr>
  <div [style.color]="'orange'">Style Binding Test.</div>

  <div [style.color]="hasError? 'red' : 'green'">Style Binding Test: Condition.</div>

  <div [style.background-color]="colorProperty">Style Binding Test: Propety binding.</div>

  <div [ngStyle]="titleStyle">Style Binding Test: Multiple style bind.</div>
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

  public colorProperty = '#ddd';
  public titleStyle = {
    color: "#A16262",
    fontStyle: "italic"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
