# Utilisation du service Http sur des flux JSON

Le projet présenté sur ce repo permet d'utiliser le service Http de Angular2 sur des flux json (API). Il présente la mise en place du système de promise pour prendre en compte les requêtes asynchrones.

## Prérequis

Vous devez avoir la dernière version de Node.js et NPM pour faire fonctionner cette application.
    

### Présentation du service HOMEPAGE

Configuration du constructor
```bash
constructor (private http: Http) {}
    // Les fonctions sont à intégrer dans le constructor
}
```

Création d'un fonction .get() sur un fichier json utilisant le système de promise
```bash
getMemoList (): Promise<any[]> {
    return this.http.get('app/data/homepage.json').toPromise().then(this.getDataFromJson).catch(this.handleError);
}
```

Le traitement de la réponse json ce fait avec une fonction de callback placée hors de la fonction get
```bash
private getDataFromJson(res: Response) {
    return res.json() || { };
}
```

Fonction pour traiter les erreurs
```bash
private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
    error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Promise.reject(errMsg);
}
```

### Présentation du component HOMEPAGE

Pour faire fonctionner correctement le système de promise, il est fortement recommandé d'implémenter la class OnInit au composant.

Ajout du service dans le constructor
```bash
constructor(
    private homepageService: HomepageService,
){};
```

Création d'une fonction pour afficher la collection de données
```bash
getMemos() {
    this.homepageService.getMemoList()
    .then( data => this.collection = data, error =>  this.errorMessage = <any>error);
}
```

Appel de la fonction pour afficher la collection de données
```bash
ngOnInit() { 
    this.getMemos(); 
}
```
