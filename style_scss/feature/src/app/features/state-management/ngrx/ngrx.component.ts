import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { increment, decrement } from '../counter.actions';

@Component({
  selector: 'app-ngrx',
  templateUrl: './ngrx.component.html',
  styleUrls: ['./ngrx.component.scss']
})
export class NgrxComponent {
  count$ = this.store.select('count');

  constructor(private store: Store<{ count: number }>) {}

  increment(): void {
    this.store.dispatch(increment());
  }

  decrement(): void {
    this.store.dispatch(decrement());
  }

}
