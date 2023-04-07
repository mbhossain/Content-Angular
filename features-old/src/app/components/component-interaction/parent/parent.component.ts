/* Angular Stuff */
import { Component, OnInit, ViewChild } from '@angular/core';

/* 3rd party libraries */

/* Our own stuff */
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  public salutation: string = 'Mridha';
  public message = '';

  @ViewChild(ChildComponent, { static: true })
  childComponent!: ChildComponent;

  constructor() { }

  ngOnInit(): void {
  }

}
