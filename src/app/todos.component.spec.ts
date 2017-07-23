//
// import { Todo } from './todo';
// import {TodosComponent} from './todos.component';
// import {TestBed} from '@angular/core/testing';
//
// describe('BannerComponent (inline template)', () => {
//
//   let comp:    Todo;
//
//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       declarations: [ TodosComponent ], // declare the test component
//     });
//   });
//
//   it('should display original title', () => {
//     comp = new Todo( false, 'foo', new Date(2017, 5));
//     comp.text = 'Hello world';
//     expect(comp.text).toEqual('Hello world');
//   });
// });


import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

import { Todo } from './todo';
import {TodosComponent} from './todos.component';
import {} from 'jasmine';
import {defineLocale} from "moment";

define
  describe('BannerComponent (inline template)', () => {

  let comp:    TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;
  let de:      DebugElement;
  let el:      HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ TodosComponent ], // declare the test component
    });

    fixture = TestBed.createComponent(TodosComponent);

    comp = fixture.componentInstance; // BannerComponent test instance
  });

  it('should display original title', () => {
    fixture.detectChanges();
    expect(comp.todos).toContain(undefined);
  });
});


