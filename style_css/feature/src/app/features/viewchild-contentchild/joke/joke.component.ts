import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Joke } from 'src/app/joke';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent {
  //'joke' here refers to the public facing identifier of this property.
  //'data' is for internal use within this component.
  //we can do away with 'joke' - then 'data' will become both the publc facing property name and internal reference to this input property
  @Input('joke')
  data!: Joke;

  //@Input() data: Joke;

  @ViewChild('tellMe')
  tellMeButton!: ElementRef;



  constructor() { }

  ngOnInit() { }

  buttonTextToggle() {
    if (!this.data.hide) {
      this.tellMeButton.nativeElement.textContent = 'Hide answer';
    }
    else {
      this.tellMeButton.nativeElement.textContent = 'Tell me';
    }

  }

}
