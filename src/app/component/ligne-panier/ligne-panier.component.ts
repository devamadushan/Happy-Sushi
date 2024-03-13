import { Component } from '@angular/core';
import { PanierService } from '../../service/panier.service';
import { Box } from '../../modele/Box';

@Component({
  selector: 'app-ligne-panier',
  templateUrl: './ligne-panier.component.html',
  styleUrl: './ligne-panier.component.css'
})
export class LignePanierComponent {

  lesBoxes:Array<Box> = new Array<Box>()
  constructor(private boxs :PanierService ){
    let boxes = boxs.getAllBoxes()
    console.log(boxes)
    for (const box of boxes) {
      this.lesBoxes.push(box)
    }    
  }

  afficheLesBoxes():any{
    let resultat:Array<Box> = []
for (const box of this.lesBoxes) {
  let rep =0
 /*  let avoirBox=this.lesBoxes.find((elm)function {elm.id==box.id}) */
  if(!resultat.includes(box)){
    resultat.push(box)
  }
  else{
    //Modifier la quantite deja presente dans resultat 
  }
  return resultat
}
    this.lesBoxes
  }
  deleteBox(idBox : number){
    let tableau= this.lesBoxes.filter(function(uneBoxe){return uneBoxe.id!=idBox})
    this.lesBoxes=tableau
    this.boxs.setPanierBoxes(tableau)    
  }

/*   modifierPanier(idBox,qte){
    let box = this.lesBoxes.find((uneBox)=>uneBox.id==idBox)
    if(box == undefined){

    }
  } */
}
