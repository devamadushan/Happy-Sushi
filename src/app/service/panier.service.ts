import { Injectable } from '@angular/core';
import { Box } from '../modele/Box';
import { Ligne } from '../modele/Ligne';

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  constructor(public panier: Array<Ligne>) {
    this.panier = JSON.parse(localStorage.getItem("lesBoxes") ?? "[]")
  }

  getAllBoxes() {

    return this.panier
  }

  setPanierBoxes(boxes: any) {
    let panier = boxes

    localStorage.setItem("lesBoxes", JSON.stringify(panier))

  }

  addPanier(uneBox: Box, qte: number) {
    let avoirBox = false
  
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
  }
}
