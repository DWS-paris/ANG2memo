import { Component} from '@angular/core';
import './rxjs-operators';

@Component({
	selector: 'my-app',
	template: `
		<header class="animated fadeInDown">
		<app-header></app-header>
		</header>

		<main class="mainContent">
		<router-outlet></router-outlet>
		</main>

		<footer class="animated fadeInUp">
			<app-footer></app-footer>
		</footer>
`
})
export class AppComponent{ }