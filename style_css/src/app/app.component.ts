/* Angular Stuff */
import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Menu } from './menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'angular';
  index = 0;
  menu: any;
  expand: any = {};
  selectedNode: any = null;

  constructor(private router: Router) {
    this.menu = Menu.map(x => this.toNode(x));
  }

  private toNode(x: any): any {
    const y: any = { ...x };
    y.index = ++this.index;
    for (let n = 0; n < y.submenu.length; n++) {
      y.submenu[n] = this.toNode(y.submenu[n])
    }
    return y;
  }

  toggleVisible(node: any) {
    if (node.submenu && node.submenu.length) {
      if (this.expand[node.index]) {
        this.expand[node.index] = false;
      } else {
        this.expand[node.index] = true;
      }
    }
  }

  selectNode(node: any) {
    this.selectedNode = node;
    this.router.navigate([`${this.selectedNode.path}`])
  }
}
