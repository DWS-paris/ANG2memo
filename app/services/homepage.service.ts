import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers } from '@angular/http';

@Injectable()
export class HomepageService {

  constructor (private http: Http) {}

  // Création d'un fonction .get() sur un fichier json utilisant le système de promise
  getMemoList (): Promise<any[]> {
    return this.http.get('app/data/homepage.json').toPromise().then(this.getDataFromJson).catch(this.handleError);
  }

  // Création d'un fonction .get() sur un fichier json utilisant le système de promise
  getFooterList (): Promise<any[]> {
    return this.http.get('app/data/footer.json').toPromise().then(this.getDataFromJson).catch(this.handleError);
  }

  // Le traitement de la réponse json ce fait avec une fonction de callback placée hors de la fonction get
  private getDataFromJson(res: Response) {
    return res.json() || { };
  }

  // Fonction pour récupérer un item dans la collection json
  getMemo(id: number): Promise<any> {
    return this.getMemoList().then(memo => memo.find(singleMemo => singleMemo.id === id));
  }

  // Fonction pour traiter les erreurs
  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
    error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Promise.reject(errMsg);
  }

  

}