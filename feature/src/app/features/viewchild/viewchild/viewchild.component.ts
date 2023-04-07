import { Component, ElementRef, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-viewchild',
  templateUrl: './viewchild.component.html',
  styleUrls: ['./viewchild.component.css']
})
export class ViewchildComponent {

  @ViewChild('dateInput')
  dateOfBirth!: ElementRef;

  @ViewChild('ageInput')
  age!: ElementRef;

  @ViewChild(ChildComponent, { static: true })
  childComp!: ChildComponent;

  calculateAge() {
    let birthYear = new Date(this.dateOfBirth.nativeElement.value).getFullYear();
    let currentYear = new Date().getFullYear();
    let ageNow = currentYear - birthYear;
    this.age.nativeElement.value = ageNow;
  }

}
