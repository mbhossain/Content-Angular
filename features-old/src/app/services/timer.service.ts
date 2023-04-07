import { Injectable, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimerService implements OnDestroy {
  timer = new Subject<string>();
  private intervalId: any;

  constructor() {
    this.intervalId = setInterval(() => {
      this.timer.next(new Date().toString());
    }, 1000);
  }

  ngOnDestroy(): void {
    this.timer.complete();
    clearInterval(this.intervalId);
  }
}
