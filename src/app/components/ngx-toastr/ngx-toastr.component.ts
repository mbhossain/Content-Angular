/* Angular Stuff */
import { Component, OnInit } from '@angular/core';

/* 3rd party libraries */
import { ToastrService } from 'ngx-toastr';

/* Our own stuff */


@Component({
  selector: 'app-ngx-toastr',
  templateUrl: './ngx-toastr.component.html',
  styleUrls: ['./ngx-toastr.component.css']
})
export class NgxToastrComponent implements OnInit {

  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  showToasterSuccess() {
    this.toastr.success("Data shown successfully !!", "Success")
  }

  showToasterError() {
    this.toastr.error("Something is wrong", "Error")
  }

  showToasterInfo() {
    this.toastr.info("This is info", "Info")
  }

  showToasterWarning() {
    this.toastr.warning("This is warning", "Warning")
  }

}
