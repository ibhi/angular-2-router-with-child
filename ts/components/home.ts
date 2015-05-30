import {Component, View} from 'angular2/angular2';
import {RouteConfig, RouterOutlet, routerInjectables} from 'angular2/router';

import {HomeLeft} from './home-left';
import {HomeRight} from './home-right';

@Component({
	selector: 'home'
})
@View({
	template: `<p>This is {{name}} page</p>
	<router-outlet name="home_left"></router-outlet>
	<router-outlet name="home_right"></router-outlet>
	`,
	directives: [RouterOutlet]
})
@RouteConfig([
	{path: '/', components: {'home_left': HomeLeft, 'home_right': HomeRight}}
])
export class Home{
	name: string;
	// router: Router;
	constructor(){
		this.name = 'Home';
		// this.router = router;

		// router.config([
		// 	{path: '/', components: {'home_left': HomeLeft, 'home_right': HomeRight}}
		// ]);
	}
}