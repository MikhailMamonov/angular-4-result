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

// class MockAuthService {
//   authenticated = false;
//
//   isAuthenticated() {
//     return this.authenticated;
//   }
// }
  describe('TodosComponent (inline template)', () => {
  beforeEach(() => {
    TestBed.initTestEnvironment( BrowserDynamicTestingModule, platformBrowserDynamicTesting() ).configureTestingModule({
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
    this.service = TestBed.get(TodosService);
  });

  it('should display original title',() => {
    console.log("Ya tut ");
    console.log(this.comp);
    spyOn(this.service, '_flushTodos').and.returnValue(void);
    this.fixture.detectChanges();
    expect(comp.).toBeFalsy();
    expect(authService.isAuthenticated).toHaveBeenCalled();
    expect(true).toEqual(true);
  });
});


