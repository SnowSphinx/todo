import {Component} from 'angular2/core';
import {Hero} from './hero';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from './hero.service';

import { Router } from 'angular2/router';

import {OnInit} from 'angular2/core';

@Component({
    selector: 'my-heroes',
    templateUrl: 'app/heroes.component.html',


    styles:[`
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

    directives: [HeroDetailComponent],
})




export class HeroesComponent implements OnInit {

    ngOnInit() {
        this.getHeroes();
    }

    constructor(
        private _router: Router,
        private _heroService: HeroService) { }
    getHeroes() {
        this._heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    constructor(private _heroService: HeroService) { }

    title = 'Tour of Heroes';
    heroes: Hero[];


    selectedHero: Hero;

    onSelect(hero: Hero) {


        this.selectedHero = hero;

    }


    gotoDetail(hero :Hero){

        let link = ['HeroDetail', { id: hero.id }];
        this._router.navigate(link);

    }

    getHeroes() {

        this._heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
    }
}

