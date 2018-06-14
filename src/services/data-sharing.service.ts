import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { windowWhen } from 'rxjs/operators';
import { Produit } from '../model/model.produit';
import { Pays } from '../model/model.pays';


@Injectable({
  providedIn: 'root'
})
export class DataSharingService {

    private reference = new BehaviorSubject<number>(0);
    currentReference = this.reference.asObservable();

    private produit = new BehaviorSubject<Produit>(new Produit());
    currentProduit = this.produit.asObservable();

    private pays = new BehaviorSubject<Pays>(new Pays());
    currentPays = this.pays.asObservable();

    constructor() { }

      newProd(produit: Produit){
        this.produit.next(produit);
      }

      newPays(pays: Pays){
        this.pays.next(pays);
      }

    newId(reference: number) {
      this.reference.next(reference);
    }
}
