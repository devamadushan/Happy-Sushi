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

  historique :Array<Commande>

  constructor(private commande : HistoriqueService){
    this.historique = commande.getHistorique()
  }


  getTotal(lignes : Array<Ligne>){
    let total = 0
    for (const ligne of lignes) {
      total+=ligne.box.prix*ligne.qte
    }
    return total
  }
}
