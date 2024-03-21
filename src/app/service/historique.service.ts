import { Injectable } from '@angular/core';
import { Ligne } from '../modele/Ligne';
import { Commande } from '../modele/Commande';

@Injectable({
  providedIn: 'root'
})
export class HistoriqueService {

  historiqueCommandes : Array<Commande>
  constructor() { 
    this.historiqueCommandes =JSON.parse(localStorage.getItem("lesCommandes") ?? "[]")

  }
  getHistorique(){
    return this.historiqueCommandes
  }
  setHistoriqueLocal(historiques : Commande){

    localStorage.setItem("lesCommandes", JSON.stringify(historiques))

  }

  addHistorique(commande : Commande){
   
    this.historiqueCommandes.push(commande)
    localStorage.setItem("lesCommandes", JSON.stringify(this.historiqueCommandes))
    

  }


}
