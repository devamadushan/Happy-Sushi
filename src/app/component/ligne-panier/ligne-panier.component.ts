import { Component } from '@angular/core';
import { PanierService } from '../../service/panier.service';
import { Box } from '../../modele/Box';
import { Ligne } from '../../modele/Ligne';

@Component({
  selector: 'app-ligne-panier',
  templateUrl: './ligne-panier.component.html',
  styleUrl: './ligne-panier.component.css'
})
export class LignePanierComponent {

  lesLignes:Array<Ligne> = new Array<Ligne>()
  constructor(private boxs :PanierService ){
    let boxes = boxs.getAllBoxes()
    //console.log("test",boxes[0]['Box'])
    for (const box of boxes) {
      this.lesLignes.push(box)
    }    
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
    let tableau= this.lesLignes.filter(function(uneLigne){
      if(uneLigne.box.id == idBox && uneLigne.qte >1){
        uneLigne.qte = uneLigne.qte - 1
        return uneLigne
      }
      else{
        return uneLigne.box.id!= idBox
      }
      
    
    })
    this.lesLignes=tableau
    this.boxs.setPanierBoxes(tableau)    
  }

/*   modifierPanier(idBox,qte){
    let box = this.lesBoxes.find((uneBox)=>uneBox.id==idBox)
    if(box == undefined){

    }
  } */
}
