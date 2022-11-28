import { Component } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent {
  items: any = [
    {
      title: "Item 1: Motherboard",
      description: "The Motherboard is a Printed Circuit Board that every other computer hardware component will be attached to in one way or another.",
      checked: false
    },
    {
      title: "Item 2",
      description: "Descrição",
      checked: true
    },
    {
      title: "Item 3",
      description: "Descrição",
      checked: true
    },
    {
      title: "Item 4",
      description: "Descrição",
      checked: false
    }
  ]

  toggle() {
    this.items.forEach((item: any) => item.checked = !item.checked);
  }

}
