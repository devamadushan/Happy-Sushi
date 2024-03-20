import { Injectable } from '@angular/core';
import { Ligne } from '../modele/Ligne';

@Injectable({
  providedIn: 'root'
})
export class HistoriqueService {

  historiqueCommandes : Array<Array<Ligne>> 
  constructor() { 
    this.historiqueCommandes =JSON.parse(localStorage.getItem("lesCommandes") ?? "[]")

  }
  gitHistorique(){
    return this.historiqueCommandes
  }
  setHistoriqueLocal(historiques : Array<Array<Ligne>>){

    localStorage.setItem("lesCommandes", JSON.stringify(historiques))

  }

  addHistorique(commande : Array<Ligne>){
    this.historiqueCommandes.push(commande)
    localStorage.setItem("lesCommandes", JSON.stringify(this.historiqueCommandes))
    

  }


}
