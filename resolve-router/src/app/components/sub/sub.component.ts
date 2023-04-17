import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sub',
  templateUrl: './sub.component.html',
  styleUrls: ['./sub.component.css']
})
export class SubComponent implements OnInit {
  studentList: any;

  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe(data => this.studentList = data['data']);
  }

  ngOnInit(): void {
  }

}
