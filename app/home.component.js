System.register(['angular2/core', './todo', './todo.service', 'angular2/router'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, todo_1, todo_service_1, router_1;
    var HomeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (todo_1_1) {
                todo_1 = todo_1_1;
            },
            function (todo_service_1_1) {
                todo_service_1 = todo_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            HomeComponent = (function () {
                function HomeComponent(_router, _Service) {
                    this._router = _router;
                    this._Service = _Service;
                    this.title = 'TODO';
                    this.sort = 1;
                }
                HomeComponent.prototype.ngOnInit = function () {
                    this.getHeroes();
                };
                HomeComponent.prototype.getHeroes = function () {
                    var _this = this;
                    this._Service.getHeroes().then(function (heroes) { return _this.todos = heroes; });
                };
                HomeComponent.prototype.saveToDo = function () {
                    localStorage.setItem("todo", JSON.stringify(this.todos));
                };
                HomeComponent.prototype.onSelect = function (hero) {
                    this.selectedHero = hero;
                };
                HomeComponent.prototype.addNew = function (value) {
                    var _hero = new todo_1.ToDo();
                    _hero.name = value;
                    this.todos.push(_hero);
                    this.saveToDo();
                };
                HomeComponent.prototype.onChecked = function (hero) {
                    hero.done = !hero.done;
                };
                HomeComponent.prototype.delete = function (hero) {
                    this.todos.splice(this.todos.indexOf(hero), 1);
                    this.saveToDo();
                };
                HomeComponent.prototype.sortByTitle = function (hero) {
                    var _this = this;
                    this.todos = this.todos.sort(function (a, b) {
                        if (a.name > b.name)
                            return 1 * _this.sort;
                        return -1 * _this.sort;
                    });
                    this.sort = -this.sort;
                };
                HomeComponent.prototype.gotoDetail = function (hero) {
                    var link = ['HeroDetail', { id: hero.id }];
                    this._router.navigate(link);
                };
                HomeComponent.prototype.getHeroes = function () {
                    var _this = this;
                    this._Service.getHeroesSlowly().then(function (heroes) {
                        _this.todos = [];
                        var storedNames = JSON.parse(localStorage.getItem("todo"));
                        if (typeof storedNames != "undefined")
                            if (storedNames.length > 0)
                                _this.todos = storedNames;
                        if (_this.todos.length == 0)
                            _this.todos = heroes;
                    });
                };
                HomeComponent = __decorate([
                    core_1.Component({
                        selector: 'my-heroes',
                        templateUrl: 'app/home.component.html',
                        styles: ["\n\n  \n    .done {\n        background-color: green !important;\n    }\n    \n    .item_container {\n        background-color: #e8e8e8;\n        padding: 10px;\n        display: inline-block;\n        min-width: 300px;\n        margin-bottom: 5px;\n        border-radius: 10px;\n    }\n    \n    .selected {\n      background-color: #CFD8DC !important;\n      color: white;\n    }\n    .heroes {\n      margin: 0 0 2em 0;\n      list-style-type: none;\n      padding: 0;\n      width: 15em;\n    }\n    .heroes li {\n      cursor: pointer;\n      position: relative;\n      left: 0;\n      background-color: #EEE;\n      margin: .5em;\n      padding: .3em 0;\n      height: 1.6em;\n      border-radius: 4px;\n    }\n    .heroes li.selected:hover {\n      background-color: #BBD8DC !important;\n      color: white;\n    }\n    .heroes li:hover {\n      color: #607D8B;\n      background-color: #DDD;\n      left: .1em;\n    }\n    .heroes .text {\n      position: relative;\n      top: -3px;\n    }\n    .heroes .badge {\n      display: inline-block;\n      font-size: small;\n      color: white;\n      padding: 0.8em 0.7em 0 0.7em;\n      background-color: #607D8B;\n      line-height: 1em;\n      position: relative;\n      left: -1px;\n      top: -4px;\n      height: 1.8em;\n      margin-right: .8em;\n      border-radius: 4px 0 0 4px;\n    }\n    \n  "],
                        directives: [],
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, todo_service_1.ToDoService])
                ], HomeComponent);
                return HomeComponent;
            }());
            exports_1("HomeComponent", HomeComponent);
        }
    }
});
//# sourceMappingURL=home.component.js.map