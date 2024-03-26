import { Injectable } from '@angular/core';
import { Ligne } from '../modele/Ligne';
import { Commande } from '../modele/Commande';

@Injectable({
  providedIn: 'root'
})
export class HistoriqueService {
  // Attribute d'historique
  historiqueCommandes : Array<Commande>
  constructor() { 
    this.historiqueCommandes =JSON.parse(localStorage.getItem("lesCommandes") ?? "[]")

  }
  // getter de l'attribut historique
  getHistorique(){
    return this.historiqueCommandes
  }
  // remplace l'historique avec une nouvelle version
  setHistoriqueLocal(historiques : Commande){

    localStorage.setItem("lesCommandes", JSON.stringify(historiques))

  }

  // méthode qui permet de ajourter une nouvelle commande dans l'historique
  addHistorique(commande : Commande){
   
    this.historiqueCommandes.push(commande)
    localStorage.setItem("lesCommandes", JSON.stringify(this.historiqueCommandes))
    

  }


}
