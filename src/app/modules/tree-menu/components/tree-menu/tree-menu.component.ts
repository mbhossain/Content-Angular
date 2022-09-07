import { Component, OnInit } from '@angular/core';
import { Menu } from '../../models/menu';


@Component({
  selector: 'app-tree-menu',
  templateUrl: './tree-menu.component.html',
  styleUrls: ['./tree-menu.component.css']
})
export class TreeMenuComponent implements OnInit {
  index = 0;
  menu: any;
  expand: any = {};

  selectedNode = undefined;

  constructor() {
    this.menu = Menu.map(x => this.toNode(x));
  }

  ngOnInit(): void {
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
  }

}
