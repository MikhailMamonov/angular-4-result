declare var require: NodeRequire;
declare var System: any;
declare module 'typings/app/todo' {
	export class Todo {
	    done: boolean;
	    text: string;
	    dueDateTime: Date;
	    id: string;
	    constructor(done: boolean, text: string, dueDateTime: Date);
	}

}
declare module 'typings/app/todos.service' {
	import { Observable } from 'rxjs/Observable';
	import { LocalStorageService } from 'angular-2-local-storage';
	import { Todo } from 'typings/app/todo';
	export class TodosService {
	    private _localStorageService;
	    private readonly _localStorageKey;
	    private _todos;
	    private _data;
	    constructor(_localStorageService: LocalStorageService);
	    fetchTodos(): void;
	    private _flushTodos();
	    private _finalizeDataChanges();
	    readonly todos: Observable<Todo[]>;
	    setTodos(todos: Todo[]): void;
	    createTodo(todo: Todo): void;
	    setTodoDone(id: string, done: boolean): void;
	    removeAllTodosIfDone(): void;
	}

}
declare module 'typings/app/todos.component' {
	import { OnInit } from '@angular/core';
	import { Router } from '@angular/router';
	import { Observable } from 'rxjs/Observable';
	import 'rxjs/add/operator/map';
	import { TodosService } from 'typings/app/todos.service';
	import { Todo } from 'typings/app/todo';
	export class TodosComponent implements OnInit {
	    private _router;
	    private _todosService;
	    todos: Observable<Todo[]>;
	    private remaining;
	    private searchQuery;
	    constructor(_router: Router, _todosService: TodosService);
	    ngOnInit(): void;
	    onChangeTodoDone(event: Event, todo: Todo): void;
	    onClickDone(): void;
	    private removeAllIfDone();
	    shouldNotify(todo: Todo): boolean;
	}

}
declare module 'typings/app/add.component' {
	import { OnInit } from '@angular/core';
	import { Router } from '@angular/router';
	import { TodosService } from 'typings/app/todos.service';
	export class AddComponent implements OnInit {
	    private _todosService;
	    private _router;
	    private todoText;
	    private todoDueDateTime;
	    constructor(_todosService: TodosService, _router: Router);
	    ngOnInit(): void;
	    private goToTodos();
	    onSubmitAddForm(): void;
	    addTodo(): void;
	}

}
declare module 'typings/app/app-routing.module' {
	export class AppRoutingModule {
	}

}
declare module 'typings/app/app.component' {
	export class AppComponent {
	}

}
declare module 'typings/app/app.module' {
	export class AppModule {
	}

}
declare module 'typings/app/mock-todos' {
	import { Todo } from 'typings/app/todo';
	export const TODOS: Todo[];

}

interface NodeRequireFunction {
  (id: string): any;
}

interface NodeRequire extends NodeRequireFunction {
  resolve(id: string): string;
  cache: any;
  extensions: any;
  main: NodeModule | undefined;
}

declare var require: NodeRequire;

interface NodeModule {
  exports: any;
  require: NodeRequireFunction;
  id: string;
  filename: string;
  loaded: boolean;
  parent: NodeModule | null;
  children: NodeModule[];
}

declare var module: NodeModule;
