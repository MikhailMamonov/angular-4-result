import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import * as moment from 'moment';

import { TodosService } from './todos.service';
import { Todo } from './todo';

@Component({
  selector: 'todos',

  templateUrl: './todos.component.html',

  styleUrls: [
    './todos.component.css',
  ],

  providers: [ TodosService ],
})
export class TodosComponent implements OnInit {
  private todos: Observable<Todo[]>;
  private remaining: Observable<number>;
  private searchQuery: string;

  constructor(
    private _router: Router,
    private _todosService: TodosService,
  ) { }

  ngOnInit(): void {
    this.initialize();
  }

  private initialize(): void {
    this.todos = this._todosService.todos;
    this.remaining = this.todos.map(todos => {
      return todos.reduce((acc, it) => {
        return acc + Number(!it.done);
      }, 0);
    });
    this._todosService.fetchTodos();
  }

  onDone(): void {
    this.removeAllIfDone();
  }

  private removeAllIfDone(): void {
    // this.todos = this.todos.filter(todo => {
    //   return !todo.done;
    // });
    //
    // this._todosService.setTodos(this.todos);
  }

  shouldNotify(todo: Todo): boolean {
    const DAYS_BEFORE_NOTIFICATION = 3;

    if (todo.dueDateTime) {
      let now = moment();

      return Math.abs(now.diff(todo.dueDateTime, 'days', true)) < DAYS_BEFORE_NOTIFICATION;
    } else {
      return false;
    }
  }
}
