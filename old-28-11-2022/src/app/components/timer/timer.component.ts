import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { TimerService } from 'src/app/services/timer.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
  providers: [TimerService]
})
export class TimerComponent implements OnInit {
  time: string | undefined;

  constructor(
    private _timerService: TimerService
    , private _sharedService: SharedService) { }

  ngOnInit(): void {
    this._timerService.timer.subscribe(res => {
      
      this.time = res;
    })
  }

}
