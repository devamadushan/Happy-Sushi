import { Component } from '@angular/core';
import { HistoriqueService } from '../../service/historique.service';
import { PanierService } from '../../service/panier.service';
import { Commande } from '../../modele/Commande';
import { LignePanierComponent } from '../ligne-panier/ligne-panier.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-valider-panier',
  templateUrl: './valider-panier.component.html',
  styleUrl: './valider-panier.component.css'
})


export class ValiderPanierComponent {
// numero de la commande
numCommande : number
// option sur place ou emporter
option : string = ""
constructor(private route : ActivatedRoute,private historique : HistoriqueService, private commande : PanierService){
  let numCommande = Math.random() * (100 - 1) + 1; // retourne une valeur alléatoire pour le numero de commande 
  // récupere l'option depuis l'URL
  this.route.params.subscribe(params =>{
    this.option = params['option']
  })
  // Créé un objet Commande pour ajouter dans l'historique
  let lesLignes = new Commande(this.commande.panier,numCommande,this.option)
  this.historique.addHistorique(lesLignes)
  this.numCommande = numCommande
  this.commande.resetPanier() // remet le panier a 0
  
  
}
ngOnInit():void{

}

}
