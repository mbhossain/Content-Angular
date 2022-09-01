/* Angular Stuff */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  /*Note:
    There are mainly 3 important element of ngSwitch-
    1. ngSwitch.
    2. ngSwitchCase.
    3. ngSwitchDefault.*/
  public ngSwitchTitle = 'ngSwitch';
  public color = 'red';
  public weekDay = 'Saturday';

  /*Note:
  We can pass dynamic value via variales like-
  1. ngClass with string.
  2. ngClass with array.
  3. ngClass with object.
  4 .ngClass with component method.*/
  public ngClassTitle = 'ngClass';
  public colorClassName = 'colorClass';
  public backgroundClassName = 'backgroundClass';

  public ngStyleTitle = 'ngStyle';
  public colorValue = 'green';

  constructor() { }

  ngOnInit(): void {
  }

}
