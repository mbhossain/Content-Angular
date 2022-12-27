import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
  // providers: [SharedService]
})
export class FirstComponent implements OnInit {
  dataListFirst: any;

  constructor(
    private _studentService: StudentService
    , private _sharedService: SharedService
  ) { }

  ngOnInit(): void {
    this._studentService.getStudent().subscribe(data => {
      this._sharedService.student = data; // When comment out providers: [SharedService] student array of shared service will be empty.
      this.dataListFirst = this._sharedService.student;
    });
   
    
  }

}
