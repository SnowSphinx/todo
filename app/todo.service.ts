import {Injectable} from 'angular2/core';
import {TODO_S} from './mock-todo';
import {ToDo} from './todo';


@Injectable()
export class ToDoService {

    getHeroes() {

        return Promise.resolve(TODO_S);

    }

    getHero(id: number) {
        return Promise.resolve(TODO_S).then(
            heroes => heroes.filter(hero => hero.id === id)[0]
        );
    }

    getHeroesSlowly() {

        return new Promise<ToDo[]>(resolve =>

            setTimeout(()=>resolve(TODO_S), 100) // 2 seconds

        );

    }

}