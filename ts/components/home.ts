import {Component, View} from 'angular2/angular2';

@Component({
	selector: 'home'
})
@View({
	template: 'This is {{name}} page'
})
export class Home{
	name: string;
	constructor(){
		this.name = 'Home';
	}
}