import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  public student: any = [];
  public searchText: string = '';

  constructor(private _studentService: StudentService) { }

  ngOnInit(): void {
    this._studentService.getStudent().subscribe(data => this.student = data);
  }

  onSearchTextEntered(searchValue: string) {
    this.searchText = searchValue;
    console.log('this.searchText:', this.searchText)
  }


}
