import {ComponentFixture, inject, TestBed} from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

import { Todo } from './todo';
import {TodosComponent} from './todos.component';
import {} from 'jasmine';
import {defineLocale} from "moment";
import {TodosService} from "./todos.service";
import {Router} from "@angular/router";

// class MockAuthService {
//   authenticated = false;
//
//   isAuthenticated() {
//     return this.authenticated;
//   }
// }




  describe('TodosComponent (inline template)', () => {
    let todos: TodosComponent ;
    let service: TodosService ;
    let router: Router;

    beforeEach(inject([Router, TodosService], (_router: Router, _service: TodosService) => {
      this.service = _service;
      this.router = _router;
    }));
  beforeEach(() => {
    this.todos = new TodosComponent(this.router, this.service);
  });

  it('should display original title', () => {
    console.log(this.todos);
    expect(this.todos).toEqual(undefined));
  });
});


