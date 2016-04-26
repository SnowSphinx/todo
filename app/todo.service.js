System.register(['angular2/core', './mock-todo'], function(exports_1, context_1) {
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
    var core_1, mock_todo_1;
    var ToDoService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (mock_todo_1_1) {
                mock_todo_1 = mock_todo_1_1;
            }],
        execute: function() {
            ToDoService = (function () {
                function ToDoService() {
                }
                ToDoService.prototype.getHeroes = function () {
                    return Promise.resolve(mock_todo_1.TODO_S);
                };
                ToDoService.prototype.getHero = function (id) {
                    return Promise.resolve(mock_todo_1.TODO_S).then(function (heroes) { return heroes.filter(function (hero) { return hero.id === id; })[0]; });
                };
                ToDoService.prototype.getHeroesSlowly = function () {
                    return new Promise(function (resolve) {
                        return setTimeout(function () { return resolve(mock_todo_1.TODO_S); }, 100);
                    } // 2 seconds
                     // 2 seconds
                    );
                };
                ToDoService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], ToDoService);
                return ToDoService;
            }());
            exports_1("ToDoService", ToDoService);
        }
    }
});
//# sourceMappingURL=todo.service.js.map