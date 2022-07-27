import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  public ngSwitchtitle = 'ngSwitch';
  public color = 'red';
  public weekDay = 'Saturday';

  constructor() { }

  ngOnInit(): void {
  }

}
