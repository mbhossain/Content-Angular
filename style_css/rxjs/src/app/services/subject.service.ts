import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  private subjectSource = new Subject<string>();

  subject$ = this.subjectSource.asObservable();

  constructor() { }

  setSubjectValue(data: string) {
    this.subjectSource.next(data);
  }

}
