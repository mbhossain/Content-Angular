import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private _url: string = "/assets/student.json";


  constructor(private http: HttpClient) { }

  getStudent(): Observable<Student[]> {
    // let x = this.http.get<Student[]>(this._url);
    // x.subscribe(data => console.log(data));
    // return x;
    return this.http.get<Student[]>(this._url);
  }
}
