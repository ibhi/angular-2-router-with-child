import {Component, View} from 'angular2/angular2';

@Component({
	selector: 'about'
})
@View({
	template: 'This is {{name}} page'
})
export class About{
	name: string;
	constructor(){
		this.name = 'About';
	}
}