import { Component } from '@angular/core';
import { SubjectBehaviorSubjectService } from 'src/app/services/subject-behavior-subject.service';

@Component({
  selector: 'app-subject-behavior-subject',
  templateUrl: './subject-behavior-subject.component.html',
  styleUrls: ['./subject-behavior-subject.component.css']
})
export class SubjectBehaviorSubjectComponent {
  title = "subject-tutorial"
  users: any[] = [];
  users_behavior_subject: any[] = [];

  constructor(private _subject_Behavior_subject: SubjectBehaviorSubjectService) {
    console.log("Application constructor")
    this._subject_Behavior_subject.users$.subscribe(users => {
      this.users = users;
      console.log(users); //Did't show any value
    })

    this._subject_Behavior_subject.users_behavior_subject$.subscribe(users_behavior_subject => {
      this.users_behavior_subject = users_behavior_subject;
      console.log(users_behavior_subject);
    })

    this._subject_Behavior_subject.updateUsers(); //That allows us to manually add data to the stream
  }
}
