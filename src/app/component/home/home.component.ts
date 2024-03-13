import { Component } from '@angular/core';
import { BoxsService } from '../../service/boxs.service';
import { Box } from '../../modele/Box';
import { PanierComponent } from '../panier/panier.component';
import { PanierService } from '../../service/panier.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {



boxes:Array<Box>=[]
listBoxBySaveurs:Map<string,Array<Box>> = new Map<string,Array<Box>>()


  constructor(private boxs : BoxsService,private panierService:PanierService){
    this.boxs.getBoxs().subscribe((resultat)=>{
     

      for (const uneBox of resultat) {
        let box1=Box.transforme(uneBox)
        this.boxes.push(box1)
      }
      this.boxesBySaveur()
      
      
    })
  }

  boxesBySaveur(){

    let boxesAvocatSaumonCheese= this.boxes.filter((uneBox)=>uneBox.saveurs.includes("avocat")&&uneBox.saveurs.includes("saumon")&&uneBox.saveurs.includes("cheese"))
    let boxCoriandreAvocatSaumonCheese = this.boxes.filter((uneBox)=>uneBox.saveurs.includes("coriandre")&&uneBox.saveurs.includes("avocat")&&uneBox.saveurs.includes("cheese"))
    let avocatSaumon = this.boxes.filter((uneBox)=>uneBox.saveurs.includes("avocat")&&uneBox.saveurs.includes("saumon"))
    let saumon= this.boxes.filter((uneBox)=>uneBox.saveurs.includes("saumon"))
    let avocatSaumonThon = this.boxes.filter((uneBox)=>uneBox.saveurs.includes("saumon")&&uneBox.saveurs.includes("avocat")&&uneBox.saveurs.includes("thon"))
    let avocatSaumonThonCheese = this.boxes.filter((uneBox)=>uneBox.saveurs.includes("saumon")&&uneBox.saveurs.includes("avocat")&&uneBox.saveurs.includes("thon")&&uneBox.saveurs.includes("cheese"))
    let avocatSaumonCheeseViande = this.boxes.filter((uneBox)=>uneBox.saveurs.includes("saumon")&&uneBox.saveurs.includes("avocat")&&uneBox.saveurs.includes("viande")&&uneBox.saveurs.includes("cheese"))
    let avocatSaumonThonViandeCrevetteSpicy = this.boxes.filter((uneBox)=>uneBox.saveurs.includes("saumon")&&uneBox.saveurs.includes("avocat")&&uneBox.saveurs.includes("thon")&&uneBox.saveurs.includes("crevette")&&uneBox.saveurs.includes("spicy")&&uneBox.saveurs.includes("viande"))
    let avocatSaumonViandeSpicySerioleLalandiCoriande = this.boxes.filter((uneBox)=>uneBox.saveurs.includes("saumon")&&uneBox.saveurs.includes("avocat")&&uneBox.saveurs.includes("thon")&&uneBox.saveurs.includes("crevette")&&uneBox.saveurs.includes("spicy")&&uneBox.saveurs.includes("viande"))
    let avocatSaumonThonCheeseSpicy = this.boxes.filter((uneBox)=>uneBox.saveurs.includes("saumon")&&uneBox.saveurs.includes("avocat")&&uneBox.saveurs.includes("thon")&&uneBox.saveurs.includes("cheese")&&uneBox.saveurs.includes("spicy"))

    this.listBoxBySaveurs.set("Avocat-Saumon-Cheese",boxesAvocatSaumonCheese)
    this.listBoxBySaveurs.set("Coriandre-Avocat-Saumon-Cheese",boxCoriandreAvocatSaumonCheese)
    this.listBoxBySaveurs.set("Avocat-Saumon",avocatSaumon)
    this.listBoxBySaveurs.set("Saumon",saumon)
    this.listBoxBySaveurs.set("Avocat-Saumon-Thon",avocatSaumonThon)
    this.listBoxBySaveurs.set("Avocat-Saumon-Thon-Cheese",avocatSaumonThonCheese)
    this.listBoxBySaveurs.set("Avocat-Saumon-Cheese-Viande",avocatSaumonCheeseViande)
    this.listBoxBySaveurs.set("Avocat-Saumon-Thon-Viande-Crevette-Spicy",avocatSaumonThonViandeCrevetteSpicy)
    this.listBoxBySaveurs.set("Avocat-Saumon-Viande-Spicy-Seriole Lalandi-Coriande",avocatSaumonViandeSpicySerioleLalandiCoriande)
    this.listBoxBySaveurs.set("Avocat-Saumon-Thon-Cheese-Spicy",avocatSaumonThonCheeseSpicy)
  this.listBoxBySaveurs.keys()
  }

  addPanier(box : Box){
    let panier= this.panierService.getAllBoxes()
    panier.push(box)
    localStorage.setItem("lesBoxes",JSON.stringify(panier))
  }

}
