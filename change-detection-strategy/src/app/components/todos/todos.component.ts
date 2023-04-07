import { Component } from '@angular/core';
import { TodoInterface } from 'src/app/types/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  todos: TodoInterface[] = [
    {
      id: '1',
      text: 'First todo',
      isCompleted: true
    },
    {
      id: '2',
      text: 'Second todo',
      isCompleted: true
    },
    {
      id: '3',
      text: 'Third todo',
      isCompleted: true
    }
  ]

  changeText(): void {
    console.log('changeText');
  }

  changeArray(): void {
    // this.todos[0].text = 'Foo';
    this.todos[0] = { ...this.todos[0], text: 'Foo' };
    console.log(this.todos);
  }
}
