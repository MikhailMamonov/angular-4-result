/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("@angular/core");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("@angular/router");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var BehaviorSubject_1 = __webpack_require__(14);
var angular_2_local_storage_1 = __webpack_require__(3);
var TodosService = (function () {
    function TodosService(_localStorageService) {
        this._localStorageService = _localStorageService;
        this._localStorageKey = 'todos';
        this._data = { todos: [] };
        this._todos = new BehaviorSubject_1.BehaviorSubject([]);
    }
    TodosService.prototype.fetchTodos = function () {
        this._data.todos = (this._localStorageService.get(this._localStorageKey) || []);
        this._todos.next(this._data.todos);
    };
    TodosService.prototype._flushTodos = function () {
        this._localStorageService.set(this._localStorageKey, this._data.todos);
    };
    TodosService.prototype._finalizeDataChanges = function () {
        this._flushTodos();
        this._todos.next(this._data.todos);
    };
    Object.defineProperty(TodosService.prototype, "todos", {
        get: function () {
            return this._todos.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    TodosService.prototype.setTodos = function (todos) {
        this._data.todos = todos;
        this._finalizeDataChanges();
    };
    TodosService.prototype.createTodo = function (todo) {
        this._data.todos.push(todo);
        this._finalizeDataChanges();
    };
    TodosService.prototype.setTodoDone = function (id, done) {
        console.log(id, done);
        this._data.todos = this._data.todos.map(function (todo) {
            if (todo.id === id) {
                todo.done = done;
            }
            return todo;
        });
        this._finalizeDataChanges();
    };
    TodosService.prototype.removeAllTodosIfDone = function () {
        this._data.todos = this._data.todos.filter(function (todo) {
            return !todo.done;
        });
        this._finalizeDataChanges();
    };
    TodosService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [angular_2_local_storage_1.LocalStorageService])
    ], TodosService);
    return TodosService;
}());
exports.TodosService = TodosService;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("angular-2-local-storage");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(1);
__webpack_require__(13);
var moment = __webpack_require__(5);
var todos_service_1 = __webpack_require__(2);
var TodosComponent = (function () {
    function TodosComponent(_router, _todosService) {
        this._router = _router;
        this._todosService = _todosService;
    }
    TodosComponent.prototype.ngOnInit = function () {
        this.todos = this._todosService.todos;
        this.remaining = this.todos.map(function (todos) {
            return todos.reduce(function (acc, it) {
                return acc + Number(!it.done);
            }, 0);
        });
        this._todosService.fetchTodos();
    };
    TodosComponent.prototype.onChangeTodoDone = function (event, todo) {
        var done = event.target.checked;
        this._todosService.setTodoDone(todo.id, done);
    };
    TodosComponent.prototype.onClickDone = function () {
        this.removeAllIfDone();
    };
    TodosComponent.prototype.removeAllIfDone = function () {
        this._todosService.removeAllTodosIfDone();
    };
    TodosComponent.prototype.shouldNotify = function (todo) {
        var DAYS_BEFORE_NOTIFICATION = 3;
        if (todo.dueDateTime) {
            var now = moment();
            return Math.abs(now.diff(todo.dueDateTime, 'days', true)) < DAYS_BEFORE_NOTIFICATION;
        }
        else {
            return false;
        }
    };
    TodosComponent = __decorate([
        core_1.Component({
            selector: 'todos',
            templateUrl: './todos.component.html',
            styleUrls: [
                './todos.component.css',
            ],
            providers: [todos_service_1.TodosService],
        }),
        __metadata("design:paramtypes", [router_1.Router,
            todos_service_1.TodosService])
    ], TodosComponent);
    return TodosComponent;
}());
exports.TodosComponent = TodosComponent;


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(1);
var moment = __webpack_require__(5);
var todo_1 = __webpack_require__(15);
var todos_service_1 = __webpack_require__(2);
var AddComponent = (function () {
    function AddComponent(_todosService, _router) {
        this._todosService = _todosService;
        this._router = _router;
    }
    AddComponent.prototype.ngOnInit = function () {
        this._todosService.fetchTodos();
    };
    AddComponent.prototype.goToTodos = function () {
        this._router.navigate(['/todos']);
    };
    AddComponent.prototype.onSubmitAddForm = function () {
        this.addTodo();
    };
    AddComponent.prototype.addTodo = function () {
        var todo = new todo_1.Todo(false, this.todoText, moment(this.todoDueDateTime).toDate());
        this._todosService.createTodo(todo);
        this.goToTodos();
    };
    AddComponent = __decorate([
        core_1.Component({
            selector: 'add',
            templateUrl: './add.component.html',
            styleUrls: [
                './add.component.css',
            ],
            providers: [todos_service_1.TodosService],
        }),
        __metadata("design:paramtypes", [todos_service_1.TodosService,
            router_1.Router])
    ], AddComponent);
    return AddComponent;
}());
exports.AddComponent = AddComponent;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_dynamic_1 = __webpack_require__(8);
var app_module_1 = __webpack_require__(9);
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);


/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("@angular/platform-browser-dynamic");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var platform_browser_1 = __webpack_require__(10);
var forms_1 = __webpack_require__(11);
var angular_2_local_storage_1 = __webpack_require__(3);
var app_routing_module_1 = __webpack_require__(12);
var ng2_search_filter_1 = __webpack_require__(16);
var app_component_1 = __webpack_require__(17);
var todos_component_1 = __webpack_require__(4);
var add_component_1 = __webpack_require__(6);
var todos_service_1 = __webpack_require__(2);
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                angular_2_local_storage_1.LocalStorageModule.withConfig({
                    prefix: 'TodoList',
                    storageType: 'localStorage',
                }),
                app_routing_module_1.AppRoutingModule,
                ng2_search_filter_1.Ng2SearchPipeModule,
            ],
            declarations: [
                app_component_1.AppComponent,
                todos_component_1.TodosComponent,
                add_component_1.AddComponent,
            ],
            exports: [
                app_routing_module_1.AppRoutingModule
            ],
            providers: [
                todos_service_1.TodosService,
            ],
            bootstrap: [
                app_component_1.AppComponent,
            ],
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("@angular/platform-browser");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("@angular/forms");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(1);
var todos_component_1 = __webpack_require__(4);
var add_component_1 = __webpack_require__(6);
var ROUTES = [
    { path: 'add', component: add_component_1.AddComponent },
    { path: 'todos', component: todos_component_1.TodosComponent },
    { path: '', redirectTo: '/todos', pathMatch: 'full' },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(ROUTES)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;


/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("rxjs/add/operator/map");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("rxjs/BehaviorSubject");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ID = function () {
    // Math.random should be unique because of its seeding algorithm.
    // Convert it to base 36 (numbers + letters), and grab the first 9 characters
    // after the decimal.
    return '_' + Math.random().toString(36).substr(2, 9);
};
var Todo = (function () {
    function Todo(done, text, dueDateTime) {
        this.done = done;
        this.text = text;
        this.dueDateTime = dueDateTime;
        this.id = ID();
    }
    return Todo;
}());
exports.Todo = Todo;


/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("ng2-search-filter");

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: './app.component.html',
            styleUrls: [
                './app.component.css',
            ]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ })
/******/ ]);