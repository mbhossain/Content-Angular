import { Component, ContentChild } from '@angular/core';
import { Joke } from 'src/app/joke';
import { JokeComponent } from '../joke/joke.component';

@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.css']
})
export class JokeListComponent {
  // picks the first view child instance that is of the type JokeComponent 
  // @ViewChild(JokeComponent) jokeViewChild: JokeComponent;
  // @ViewChildren(JokeComponent) jokeViewChildren: QueryList<JokeComponent>;
  // @ViewChild('header') headerElement: ElementRef;

  //if we specify an inappropriate component here, the html will still be rendered but @ContentChild will not be able to query the DOM.
  // the same holds true for @ViewChild/@ViewChildren/@ContentChildren
  @ContentChild(JokeComponent)
  jokeContentChild!: JokeComponent;

  constructor() {
    // console.log(`new - jokeViewChild is ${this.jokeViewChild}`);
    // console.log(`new - jokeContentChild is ${this.jokeContentChild}`);
  }

  ngAfterContentInit() {
    console.log(`ngAfterContentInit - jokeContentChild is ${this.jokeContentChild}`);
  }

  ngAfterViewInit() {
    // console.log(`ngAfterViewInit - jokeViewChild is ${this.jokeViewChild}`);
    // console.log(this.jokeViewChild);

    //let jokes: QueryList<JokeComponent> = this.jokeViewChildren;
    // let jokes: JokeComponent[] = this.jokeViewChildren.toArray();
    // console.log('Jokes:');
    // console.log(jokes);

    // console.log(`ngAfterViewInit - headerElement is ${this.headerElement}`);
    // console.log(this.headerElement);
    // this.headerElement.nativeElement.textContent = 'Best Joke Machine';
  }

  jokes: Joke[] = [
    new Joke('What did the cheese say when it looked in the mirror', 'Hello-me (Halloumi)'),
    new Joke('What kind of cheese do you use to disguise a small horse', 'Mask-a-pony (Mascarpone)')
  ];

}
