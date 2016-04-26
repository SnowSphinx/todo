import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { ToDoService }     from './todo.service';
import { HomeComponent } from './home.component';


@Component({
    selector: 'my-app',
    template: `
    
    <h1>{{title}}</h1>
        
    
    <router-outlet></router-outlet>
    
  `,
    directives: [ROUTER_DIRECTIVES],
    providers: [
        ROUTER_PROVIDERS,
        ToDoService
    ]

})

@RouteConfig([
    {
        path: '/home',
        name: 'Home',
        component: HomeComponent,

        useAsDefault: true
    },
])


export class AppComponent {
    title = 'TODO (c) Devlet';


}
