import { Component } from '@angular/core';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent {
  public data: string = '';

  constructor(private subjectService: SubjectService) { }

  ngOnInit() {
  }

  subscribeToSubject() {
    this.subjectService
      .subject$
      .subscribe((value: string) =>
        this.data = value
      );
  }

}
