import { Component, OnInit} from '@angular/core';
import { HomepageService }       from '../services/homepage.service';

@Component({
    selector: 'app-footer',
    template: `
        <!-- Binding de l'événement click pour créer une toggle box -->
        <h4 (click)="isOpen = !isOpen;">Consulter l'aide en ligne</h4>

        <!-- Affichage conditionnel des erreurs -->
        <em *ngIf="errorMessage">{{errorMessage}}</em>

        <!-- Toggle de la class .open -->
        <ul class="footerList " [ngClass]="{'open': isOpen }">
            <li *ngFor="let item of collection"><a href="{{item.link}}" target="_blank">{{item.title}}</a></li>
        </ul>
    `
})
export class AppFooterDirective implements OnInit{
    errorMessage: string;
    collection: any[];

    constructor(
        // Ajout du service dans le constructor
        private homepageService: HomepageService
    ){};

    // Création d'un fonction pour récupérer la collection de données
    getFooterList() {
        this.homepageService.getFooterList()
        .then( data => this.collection = data, error =>  this.errorMessage = <any>error);
    }

    ngOnInit() { 
        // Appel de la fonction pour récupérer la collection de données
        this.getFooterList(); 
    }
 }