import { Component } from '@angular/core';
import { HistoriqueService } from '../../service/historique.service';
import { PanierService } from '../../service/panier.service';
@Component({
  selector: 'app-valider-panier',
  templateUrl: './valider-panier.component.html',
  styleUrl: './valider-panier.component.css'
})
export class ValiderPanierComponent {
constructor(private historique : HistoriqueService, commande : PanierService){
  this.historique.addHistorique(commande.panier)
}


}
