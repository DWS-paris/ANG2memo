import { Component} from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <header class="animated fadeInDown">
      <section id="topHeader">
				<article>
					<img routerLink="/home" src="app/img/logo.svg" alt="Logo DigitalWorkshop">
				</article>
				<article>
					<h1>Hives of knowledge <span>Mémento du développeur Web</span></h1>
				</article>
			</section>
    </header>
  `
})
export class AppHeaderDirective{ }