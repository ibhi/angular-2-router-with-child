import {Component, View} from 'angular2/angular2';

@Component({
	selector: 'login'
})
@View({
	template: 'This is {{name}} page'
})
export class Login{
	name: string;
	constructor(){
		this.name = 'Login';
	}
}