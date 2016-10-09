import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { HomepageService } from '../services/homepage.service';
import { MemopageService } from '../services/memopage.service';

@Component({
    template: 
    `
        <h2 class="animated flipInX">{{title}}</h2>

        <!-- Affichage conditionnel des erreurs -->
        <em *ngIf="errorMessage">{{errorMessage}}</em>

         <section class="toggleBox animated fadeIn" *ngFor="let item of collection">
            
            <!-- Binding de l'événement click pour créer une toggle box -->
            <h3 (click)="item.isOpen = !item.isOpen;">{{item.gsx$name.$t}}</h3>
            <!-- Toggle de la class .open -->
            <article class="contentToggle" [ngClass]="{'open': item.isOpen }">
                <p>{{item.gsx$desc.$t}}</p>
                <h4>Exemple</h4>
                <pre><code>{{item.gsx$code.$t}}</code></pre>
                <a href="{{item.gsx$link.$t}}" target="_blank"><i class="fa fa-external-link" aria-hidden="true"></i> Plus d'infos </a>
            </article>

        </section>
    `,
    providers: [ MemopageService ]
    })

export class MemopageComponent implements OnInit {
    title: string;
    errorMessage: string;
    collection: any[];
    singleMemo: any;

constructor (
        // Ajout des services dans le constructor
        private memopageService: MemopageService,
        private homepageService: HomepageService,

        private route: ActivatedRoute,
    ) {}

    // Création d'un fonction pour le contenu d'un item
    getMemo(link: any) {
        this.memopageService.getMemoData(link)
        .then( data => this.collection = data, error =>  this.errorMessage = <any>error);
    }

    ngOnInit() { 
        // Appel de la fonction pour afficher le titre
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            this.homepageService.getMemo(id).then(data => this.title = data.title);
        });

        // Appel de la focntion pour récupérer le flux
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            this.homepageService.getMemo(id).then(data => this.getMemo(data.flux));
        })
    }
}