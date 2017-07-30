import {ComponentFixture, inject, TestBed} from '@angular/core/testing';
import {BrowserModule, By}              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

import { Todo } from './todo';
import {TodosComponent} from './todos.component';
import {} from 'jasmine';
import {defineLocale} from "moment";
import {TodosService} from "./todos.service";
import {Router} from "@angular/router";
import {BrowserDynamicTestingModule, platformBrowserDynamicTesting} from "@angular/platform-browser-dynamic/testing";
import {AppComponent} from "./app.component";
import {AppModule} from "./app.module";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {LocalStorageModule} from "angular-2-local-storage";
import {AppRoutingModule} from "./app-routing.module";
import {Ng2SearchPipeModule} from "ng2-search-filter";
import {AddComponent} from "./add.component";
import {APP_BASE_HREF} from '@angular/common';
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/of';
import {TODOS} from "./mock-todos";
import {noUndefined} from "@angular/compiler/src/util";

// class MockAuthService {
//   authenticated = false;
//
//   isAuthenticated() {
//     return this.authenticated;
//   }
let task : Todo[] ;
let checkEl: DebugElement;
let loginEl: DebugElement;
let passwordEl: DebugElement;
let todo1:Todo;
let todo2:Todo;
let todo3:Todo;
// }
  describe('TodosComponent (inline template)', () => {
    beforeAll(()=>{TestBed.initTestEnvironment( BrowserDynamicTestingModule, platformBrowserDynamicTesting() )});
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ BrowserModule,
        FormsModule,
        LocalStorageModule.withConfig({
          prefix: 'TodoList',
          storageType: 'localStorage',
        }),
        AppRoutingModule,
        Ng2SearchPipeModule,],
      declarations: [TodosComponent, AddComponent],
      providers: [ {provide: TodosService } , {provide: APP_BASE_HREF, useValue : '/' }]
    });
    console.log("OK");
    console.log("OK");
    this.fixture = TestBed.createComponent(TodosComponent);
    this.comp = this.fixture.componentInstance; // BannerComponent test instance
    console.log("before");
    console.log(this.comp.todos);
    this.comp.ngOnInit();
    console.log("after");
    this.comp.todos.subscribe(val => console.log(val.id)+'\n');
    this.todo1=TODOS[2];
    this.todo2=TODOS[0];
    this.todo3=TODOS[3];
    this.service = this.fixture.debugElement.injector.get(TodosService);
  });

  it(' one todo created to be add ',() => {
    console.log("Ya tut ");
    this.comp._todosService.createTodo(this.todo1);
    this.fixture.detectChanges();
    this.checkEl = this.fixture.debugElement.query(By.css('input[type=checkbox]'));
    console.log("checkEl");
    console.log(this.checkEl);
    // expect(comp.).toBeFalsy();
    // expect(authService.isAuthenticated).toHaveBeenCalled();
    // expect(true).toEqual(true);
    expect(this.comp._todosService._data.todos[this.comp._todosService._data.todos.length-1].id).toEqual(this.todo1.id);
    // inject([TodosService], (injectService: TodosService) => {
    //   expect(injectService).toBe(this.service);
    // })
  });

    it(' Several todo created to be  add ',() => {
      console.log("Ya tut ");
      this.comp._todosService.createTodo(this.todo1);
      this.comp._todosService.createTodo(this.todo2);
      this.comp._todosService.createTodo(this.todo3);
      this.fixture.detectChanges();
      console.log(this.comp._todosService._data.todos.length);
      // expect(comp.).toBeFalsy();
      // expect(authService.isAuthenticated).toHaveBeenCalled();
      // expect(true).toEqual(true);
      expect(this.comp._todosService._data.todos[this.comp._todosService._data.todos.length-1].id).toEqual(this.todo3.id);
      // inject([TodosService], (injectService: TodosService) => {
      //   expect(injectService).toBe(this.service);
      // })
    });
});


