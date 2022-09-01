/* Angular Stuff */
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-component-two',
  templateUrl: './component-two.component.html',
  styleUrls: ['./component-two.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ComponentTwoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
