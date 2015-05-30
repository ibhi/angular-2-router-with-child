import {Component, View} from 'angular2/angular2';

@Component({
	selector: 'home-left'
})
@View({
	template: 'This is {{name}} page'
})
export class HomeLeft{
	name: string;
	constructor(){
		this.name = 'Home-Left';
	}
}