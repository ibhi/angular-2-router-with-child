import {Component, View} from 'angular2/angular2';

@Component({
	selector: 'home-right'
})
@View({
	template: 'This is {{name}} page'
})
export class HomeRight{
	name: string;
	constructor(){
		this.name = 'Home-Right';
	}
}