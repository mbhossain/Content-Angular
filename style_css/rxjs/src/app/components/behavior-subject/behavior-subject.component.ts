import { Component } from '@angular/core';
import { BehaviorSubjectService } from 'src/app/services/behavior-subject.service';

@Component({
  selector: 'app-behavior-subject',
  templateUrl: './behavior-subject.component.html',
  styleUrls: ['./behavior-subject.component.css']
})
export class BehaviorSubjectComponent {
  public data: string = '';

  constructor(private behaviorSubjectService: BehaviorSubjectService) { }

  ngOnInit() { }

  subscribeToBehaviorSubject() {
    this.behaviorSubjectService.behaviorSubject$.subscribe((value: string) => {
      this.data = value;
      console.log('My new value:' + value);
    });
  }

}
