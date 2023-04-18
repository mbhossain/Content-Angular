import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'student-list-sub',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  studentList: any;

  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe(data => this.studentList = data['data']);
  }

  ngOnInit(): void {
  }

}
