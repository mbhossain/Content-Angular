import { Component } from '@angular/core';
import { BehaviorSubjectService } from './services/behavior-subject.service';
import { SubjectService } from './services/subject.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rxjs';

  constructor(
    private subjectService: SubjectService,
    private behaviorSubjectService: BehaviorSubjectService) { }

  saveData(value: string) {
    this.subjectService.setSubjectValue(value);
    this.behaviorSubjectService.setSubjectValue(value);
  }
}
