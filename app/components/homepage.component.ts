// Promise Version
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomepageService }       from '../services/homepage.service';

@Component({
  selector: 'homepage-component',
  // moduleId: module.id,
  template: `
  
    <section>
      <!-- Affichage conditionnel des erreurs -->
      <em *ngIf="errorMessage">{{errorMessage}}</em>

      <article *ngFor="let item of collection" class="menuHome animated fadeIn" (click)="getMemoItem(item)">
        <img src="app/{{item.cover}}"/>
        <a class="accMenuBtn"><span>{{item.title}}</span></a>
      </article>
      
    </section>
  `,
  providers: [ HomepageService ]
})

export class HomepageComponent implements OnInit {
  errorMessage: string;
  collection: any[];

  constructor(
    // Ajout du service dans le constructor
		private homepageService: HomepageService,
    
		private router: Router
	){};

  // Création d'une fonction pour afficher la collection de données
  getMemos() {
    this.homepageService.getMemoList()
    .then( data => this.collection = data, error =>  this.errorMessage = <any>error);
  }

  // Création d'un fonction pour définir la route d'un item
  getMemoItem(memoItem: any): void {
    let id = ['/memo', memoItem.id];
    this.router.navigate(id);
  };

  ngOnInit() { 
    // Appel de la fonction pour afficher la collection de données
    this.getMemos(); 
  }

  
}