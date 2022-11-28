import { Component } from '@angular/core';
import { Joke } from 'src/app/joke';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {
  joke: Joke = new Joke('A kid threw a lump of cheddar at me', 'I thought ‘That’s not very mature');

}
