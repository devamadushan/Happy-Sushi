import { Component } from '@angular/core';
import { HistoriqueService } from '../../service/historique.service';
import { PanierService } from '../../service/panier.service';
import { Commande } from '../../modele/Commande';
import { LignePanierComponent } from '../ligne-panier/ligne-panier.component';

@Component({
  selector: 'app-valider-panier',
  templateUrl: './valider-panier.component.html',
  styleUrl: './valider-panier.component.css'
})


export class ValiderPanierComponent {
numCommande : number
constructor(private historique : HistoriqueService, private commande : PanierService){
  let numCommande = Math.random() * (100 - 1) + 1;
  let lesLignes = new Commande(this.commande.panier,numCommande)
  this.historique.addHistorique(lesLignes)
  this.numCommande = numCommande
  this.commande.resetPanier()
  
  
}


}
