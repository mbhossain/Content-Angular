import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShowMenuService {
  visible: boolean = false;
  visible1: boolean = false;

  constructor() { }

  hide() { this.visible = true; };

  show() { this.visible = false; };

  hide1() { this.visible1 = true; };

  show1() { this.visible1 = false; };
}
