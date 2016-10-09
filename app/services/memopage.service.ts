import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers} from '@angular/http';

@Injectable()
export class MemopageService {

  constructor (private http: Http) {}

  // Création d'un fonction .get() sur un fichier json utilisant le système de promise
  getMemoData (link: any): Promise<any[]> {
    return this.http.get(link)
    .toPromise()
    .then(this.getData)
    .catch(this.handleError);
  }

  // Le traitement de la réponse json ce fait avec une fonction de callback placée hors de la fonction get
  private getData(res: Response) {
    return res.json().feed.entry || { };
  }

  // Fonction pour traiter les erreurs
  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
    error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Promise.reject(errMsg);
  }

}