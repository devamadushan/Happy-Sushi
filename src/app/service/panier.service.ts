import { EventEmitter, Injectable, Output } from '@angular/core';
import { Box } from '../modele/Box';
import { Ligne } from '../modele/Ligne';
import { LignePanierComponent } from '../component/ligne-panier/ligne-panier.component';

@Injectable({
  providedIn: 'root'
})
export class PanierService {
  //attribut de Panier
  panier: Array<Ligne>

  @Output() onMajPanier = new EventEmitter<any>()

  constructor() {
    this.panier = JSON.parse(localStorage.getItem("lesBoxes") ?? "[]")
  }
  // getter de panier
  getAllBoxes() {

    return this.panier
  }
  //setter de panier
  setPanierBoxes(boxes: Array<Ligne>) {
    let panier = boxes

    localStorage.setItem("lesBoxes", JSON.stringify(panier))

  }

  // ajout d'une nouvelle box dans le panier
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
    localStorage.setItem("lesBoxes", JSON.stringify(this.panier))

    return this.panier
  }

  // une methode qui permet de diminuer la quantiter d'une box dans un panier 
  deletePanier(idBox: number) {
    let updateBoxes = this.panier.filter(function (uneLigne) {
      if (uneLigne.box.id == idBox && uneLigne.qte > 1) {
        uneLigne.qte = uneLigne.qte - 1

        return uneLigne
      }
      else {

        return uneLigne.box.id != idBox
      }
    })

    this.panier = updateBoxes
    this.setPanierBoxes(this.panier)

    return this.panier
  }

  // une méthode qui permet de supprimer completement une Box dans un panier
  deleteBoxInPanier(uneBox: Box) {
    let lesBoxes = this.panier.filter(function (uneLigne) {

      return uneLigne.box.id != uneBox.id

    })
    this.panier = lesBoxes
    this.setPanierBoxes(this.panier)
    this.onMajPanier.emit()
    return this.panier
  }

  // remetre le panier a 0
  resetPanier() {
    localStorage.setItem("lesBoxes", "[]")
    this.panier = []

  }
  lePrixTotal() {
    let total = 0
    for (const uneLigne of this.panier) {
      total += uneLigne.qte * uneLigne.box.prix
      
    }
    if (total >= 30) {
      let offre = this.offre()
     
    }

    return total
  }
  offre() {
    let prixMoinsChere = 1000
    let box = 0
    for (let ligne of this.panier) {
      if (ligne.box.prix < prixMoinsChere) {
        prixMoinsChere = ligne.box.prix
        box = ligne.box.prix

      }
    }


    return box
  }
  prixAvecReduction() {
    
    return this.lePrixTotal()-this.offre()

    
  }
}
