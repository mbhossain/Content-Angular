import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { TodosService } from 'src/app/services/todos.service';
import { TodoInterface } from 'src/app/types/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoComponent {
  @Input('todo')
  todoProps!: TodoInterface;

  filter$: Observable<string>;

  constructor(private todoService: TodosService) {
    this.filter$ = todoService.filter$;
  }

  checkRender(): boolean {
    console.log('checkRender');
    return true;
  }

  changeText(): void {
    this.todoProps.text = 'Changed from inside!';
  }

  changeFilter(): void {
    this.todoService.filter$.next('active');
  }
}
