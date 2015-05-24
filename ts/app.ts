/// <reference path="../typings/angular2/angular2.d.ts" />
import {Component, View, bootstrap, NgFor} from 'angular2/angular2';
import {RouterOutlet, RouterLink, routerInjectables, RouteConfig} from 'angular2/router';
import {Home} from './components/home';
import {Login} from './components/login';
import {About} from './components/about';


// import {NamesList} from './services/NameList';

@Component({
  selector: 'app'
})
@View({
  templateUrl: './templates/app.html',
  directives: [RouterOutlet, RouterLink]
})
@RouteConfig([
  {path: '/', component: Home, as: 'home'},
  {path: '/login', component: Login, as: 'login'},
  {path: '/about', component: About, as: 'about'}
])
class App {
}

bootstrap(App,[routerInjectables]);
