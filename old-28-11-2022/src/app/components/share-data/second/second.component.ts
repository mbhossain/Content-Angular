import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  dataListSecond: any;
  constructor(
    private _sharedService: SharedService
  ) { }

  ngOnInit(): void {
    this.dataListSecond = this._sharedService.student;

  }

}
