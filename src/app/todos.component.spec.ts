import {ComponentFixture, inject, TestBed} from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

import { Todo } from './todo';
import {TodosComponent} from './todos.component';
import {} from 'jasmine';
import {defineLocale} from "moment";
import {TodosService} from "./todos.service";
import {Router} from "@angular/router";
import {BrowserDynamicTestingModule, platformBrowserDynamicTesting} from "@angular/platform-browser-dynamic/testing";

// class MockAuthService {
//   authenticated = false;
//
//   isAuthenticated() {
//     return this.authenticated;
//   }
// }

TestBed.initTestEnvironment(
  BrowserDynamicTestingModule, platformBrowserDynamicTesting());


  describe('TodosComponent (inline template)', () => {
    let todos: TodosService ;
    let service: TodosService ;
    let router: Router;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodosService],
      providers:[TodosService]
    });
    TestBed.compileComponents();
    console.log("OK");
  });

  it('should display original title',() => {
    let fixture = TestBed.createComponent(TodosService);
    console.log(fixture);
    fixture.detectChanges();
    expect(true).toEqual(true);
  });
});


