import { Component, Input } from '@angular/core';
import { PanierService } from '../../service/panier.service';
import { Box } from '../../modele/Box';
import { Ligne } from '../../modele/Ligne';
import { HomeComponent } from '../home/home.component';
@Component({
  selector: 'app-ligne-panier',
  templateUrl: './ligne-panier.component.html',
  styleUrl: './ligne-panier.component.css'
})
export class LignePanierComponent {
  uneOffre : boolean =  false

  // lesLignes rcuperer depuis le parent
  @Input ({required:true}) lesLignes:Array<Ligne> = new Array<Ligne>()
 // Option qui est récuperer depuis le parent
  @Input({required:true}) option:string = ""


  constructor(private boxs :PanierService ){
    // récuperer les boxes qui sont dans  le panier
    let boxes = boxs.getAllBoxes()
    //console.log("test",boxes[0]['Box'])
    for (const box of boxes) {
      this.lesLignes.push(box)
    }

  }

  // une méthode qui pérmet de calculer le prix total
  lePrixTotal(){
    return this.boxs.lePrixTotal()
  }
// ajoute une nouvelle box quand l'utilisateur click sur le button +
  addPanier(uneBox : Box){
    this.boxs.addPanier(uneBox)
    
  }
//méthode qui permet de supprimer complétement le box 
  deleteBoxInPanier(uneBox : Box){
    this.boxs.deleteBoxInPanier(uneBox)
   
  }

// methode qui permet de supprimer la quantité et le Box si la quantité est <1
  deleteBox(idBox : number){
    this.lesLignes = this.boxs.deletePanier(idBox)  
   
  }

  // remet a 0 le panier quand l'utilisateur click sur valider
  resetLignes(){
    this.lesLignes = []
   
  }
offre(){
  return this.boxs.offre()
}
prixAvecReduction(){
  return this.boxs.prixAvecReduction()
}
  
lesSaveurs(){

 
  let lesSaveurs : Map<String,number> = new Map<String,number>()
  
   for (const uneLigne of this.lesLignes) {
     for (const sav of uneLigne.box.saveurs) {
       let exValeur= lesSaveurs.get(sav)
       if (exValeur==undefined){
         lesSaveurs.set(sav,uneLigne.qte)
       }
       else{
         
         lesSaveurs.set(sav,exValeur!!+uneLigne.qte)
       }
     }
   }
 return lesSaveurs
}

}