import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

const users = [
  {
    id: 1,
    name: "John Doe",
    username: "johndoe",
  },
  {
    id: 2,
    name: "Jane Doe",
    username: "janedoe",
  },
  {
    id: 3,
    name: "Janet Doe",
    username: "janetdoe",
  },
]

@Injectable({
  providedIn: 'root'
})
export class SubjectBehaviorSubjectService {
  users$ = new Subject<any>();
  users_behavior_subject$ = new BehaviorSubject<any>(undefined);

  constructor() {
    this.users$.next(users); //Did't show any value
    this.users_behavior_subject$.next(users);
  }

  updateUsers() { //That allows us to manually add data to the stream
    this.users$.next(users); 
  }

}
