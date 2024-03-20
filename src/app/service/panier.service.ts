import { EventEmitter, Injectable, Output } from '@angular/core';
import { Box } from '../modele/Box';
import { Ligne } from '../modele/Ligne';

@Injectable({
  providedIn: 'root'
})
export class PanierService {
  panier : Array<Ligne>

@Output() onMajPanier=new EventEmitter<any>()

  constructor( ) {
    this.panier = JSON.parse(localStorage.getItem("lesBoxes") ?? "[]")
  }

  getAllBoxes() {

    return  this.panier
  }

  setPanierBoxes(boxes: Array<Ligne>) {
    let panier = boxes

    localStorage.setItem("lesBoxes", JSON.stringify(panier))

  }

  addPanier(uneBox: Box) {
  this.getAllBoxes()
    let avoirBox = false
    let qte = 1
    for (const uneLigne of this.panier) {
      if (uneLigne.box.id == uneBox.id) {
        uneLigne.qte++
        avoirBox = true
      }
    }
    if (avoirBox == false) {
      let ligne = new Ligne(uneBox, qte)
      this.panier.push(ligne)
    }
    localStorage.setItem("lesBoxes",JSON.stringify(this.panier))
    this.onMajPanier.emit()
    return this.panier
  }

  deletePanier(idBox : number){
    let updateBoxes= this.panier.filter(function(uneLigne){
      if(uneLigne.box.id == idBox && uneLigne.qte >1){
        uneLigne.qte = uneLigne.qte - 1
      
        return uneLigne
      }
      else{
      
        return uneLigne.box.id!= idBox
      }
    })

    this.panier=updateBoxes
    this.setPanierBoxes(this.panier)  
    this.onMajPanier.emit()  
    return this.panier
  }
deleteBoxInPanier(uneBox : Box){
  let lesBoxes = this.panier.filter(function(uneLigne){
  
      return uneLigne.box.id!= uneBox.id
    
  })
  this.panier = lesBoxes
  this.setPanierBoxes(this.panier)
  this.onMajPanier.emit()  
  return this.panier
}
}
