import { Component, Input } from '@angular/core';
import { PanierService } from '../../service/panier.service';
import { Box } from '../../modele/Box';
import { Ligne } from '../../modele/Ligne';

@Component({
  selector: 'app-ligne-panier',
  templateUrl: './ligne-panier.component.html',
  styleUrl: './ligne-panier.component.css'
})
export class LignePanierComponent {

  @Input ({required:true}) lesLignes:Array<Ligne> = new Array<Ligne>()

  constructor(private boxs :PanierService ){
    let boxes = boxs.getAllBoxes()
    //console.log("test",boxes[0]['Box'])
    for (const box of boxes) {
      this.lesLignes.push(box)
    }
   
  }

  lePrixTotal(){
    let total = 0
    for (const uneLigne of this.lesLignes) {
      total+= uneLigne.qte*uneLigne.box.prix

    }
    return total
  }

  addPanier(uneBox : Box){
    this.boxs.addPanier(uneBox)
  }

  deleteBoxInPanier(uneBox : Box){
    this.boxs.deleteBoxInPanier(uneBox)
  }
/*   afficheLesBoxes():any{
    let resultat:Array<Box> = []
for (const box of this.lesBoxes) {
  let rep =0
 /*  let avoirBox=this.lesBoxes.find((elm)function {elm.id==box.id}) */
/* if(!resultat.includes(box)){
    resultat.push(box)
  }
  else{
    //Modifier la quantite deja presente dans resultat 
  }
  return resultat
}
    this.lesBoxes
  } */

  deleteBox(idBox : number){
    this.lesLignes = this.boxs.deletePanier(idBox)  
     
  }

/*   modifierPanier(idBox,qte){
    let box = this.lesBoxes.find((uneBox)=>uneBox.id==idBox)
    if(box == undefined){

    }
  } */
}
