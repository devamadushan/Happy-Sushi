import { Component } from '@angular/core';
import { Ligne } from '../../modele/Ligne';
import { HistoriqueService } from '../../service/historique.service';
import { Commande } from '../../modele/Commande';

@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrl: './historique.component.css'
})
export class HistoriqueComponent {
  //l'historique de tout les commandes
  historique :Array<Commande>

  constructor(private commande : HistoriqueService){
    // crée des objet historique avec la methode de getHistorique qui est dans historique Service
    this.historique = commande.getHistorique()
  }

  // permet de calculet le prix total d'une commande
  getTotal(lignes : Array<Ligne>){
    let total = 0
    for (const ligne of lignes) {
      total+=ligne.box.prix*ligne.qte
    }
    return total
  }
}
