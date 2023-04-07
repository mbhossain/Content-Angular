import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BehaviorSubjectService {

  private behaviorSubjectSource =
    new BehaviorSubject<string>("Behavior subject initial value");

  behaviorSubject$ = this.behaviorSubjectSource.asObservable();

  constructor() { }

  setSubjectValue(data: string) {
    this.behaviorSubjectSource.next(data);
  }

}
