import {Component} from 'angular2/core';
import {ToDo} from './todo';
import { ToDoService }     from './todo.service';

import { Router } from 'angular2/router';

import {OnInit} from 'angular2/core';

@Component({
    selector: 'my-heroes',
    templateUrl: 'app/home.component.html',


    styles:[`

  
    .done {
        background-color: green !important;
    }
    
    .item_container {
        background-color: #e8e8e8;
        padding: 10px;
        display: inline-block;
        min-width: 300px;
        margin-bottom: 5px;
        border-radius: 10px;
    }
    
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .heroes {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .heroes li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .heroes li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .heroes li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .heroes .text {
      position: relative;
      top: -3px;
    }
    .heroes .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
    
  `],

    directives: [],
})




export class HomeComponent implements OnInit {

    ngOnInit() {
        this.getHeroes();
    }

    constructor(
        private _router: Router,
        private _Service: ToDoService) { }
    getHeroes() {
        this._Service.getHeroes().then(heroes => this.todos = heroes);
    }

    constructor(private _Service: ToDoService) { }

    title = 'TODO';

    todos: ToDo[];


    selectedHero: ToDo;

    saveToDo() {
        localStorage.setItem("todo", JSON.stringify(this.todos));
    }

    onSelect(hero: ToDo) {

        this.selectedHero = hero;

    }

    addNew(value)
    {
        var _hero = new ToDo();
        _hero.name = value;

        this.todos.push(_hero);

        this.saveToDo();
    }

    onChecked(hero: ToDo) {

        hero.done = ! hero.done;


    }


    delete(hero: ToDo) {

        this.todos.splice( this.todos.indexOf(hero), 1 );

        this.saveToDo();
    }

    sort = 1;

    sortByTitle(hero: ToDo) {

        this.todos = this.todos.sort((a, b) => {


            if (a.name > b.name)
                return 1 * this.sort;

            return -1 * this.sort;
        });

        this.sort = - this.sort;

    }

    

    gotoDetail(hero :ToDo){

        let link = ['HeroDetail', { id: hero.id }];
        this._router.navigate(link);

    }

    getHeroes() {

        this._Service.getHeroesSlowly().then(

            heroes =>
            {
                this.todos = [];
                
                var storedNames = JSON.parse(localStorage.getItem("todo"));

                if (typeof storedNames != "undefined")
                if (storedNames.length > 0)
                    this.todos = storedNames;

                if (this.todos.length == 0)
                    this.todos = heroes;

            }


        );



    }
}

