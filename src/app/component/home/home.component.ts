import { Component, EventEmitter, Output } from '@angular/core';
import { BoxsService } from '../../service/boxs.service';
import { Box } from '../../modele/Box';
import { PanierComponent } from '../panier/panier.component';
import { PanierService } from '../../service/panier.service';
import { Ligne } from '../../modele/Ligne';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {

// L'attribut permet de désactiver le modal 'Sur place ou emporter'.
surPlaceOuEmporter = false
// Option par défaut : 'Sur place'
optionSE = "Sur place"
// Affichage des cartes lorsque l'utilisateur n'a pas cliqué sur une saveur (clé = 'rien')."
key : string = "rien"
//Tous les boîtes récupérées par l'API.
boxes:Array<Box>=[]

// Une liste des boxes triées par les saveurs
listBoxBySaveurs:Map<string,Array<Box>> = new Map<string,Array<Box>>()
// Toutes les boxes choisies par l'utilisateur
panier:Array<Ligne>


  constructor(private boxs : BoxsService,private panierService:PanierService){
// Récupère toutes les boxes choisies par l'utilisateur dans le panierService
  this.panier = this.panierService.getAllBoxes()
// Récupère toutes les boxes depuis l'API et crée des objets BOXES
    this.boxs.getBoxs().subscribe((resultat)=>{
      for (const uneBox of resultat) {
        let box1=Box.transforme(uneBox)
        this.boxes.push(box1)
      }
      // Trie toutes les boîtes avec leurs saveurs
      this.boxesBySaveur()
    })
    
    panierService.onMajPanier.subscribe(()=>{
      this.panier=[]
      this.panier = this.panierService.getAllBoxes()
    })
  }


// Méthode permettant de trier les boîtes par leurs saveurs
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
  // Permet d'ajouter une box dans le panier en utilisant le service de panier
  addPanier(box : Box){
  
    this.panier= this.panierService.addPanier(box)
  
   
  }
// Permet de changer l'affichage de la carte grâce à la clé récupérée qui trie par la saveur
  collectKey(key:string){
      this.key = key
      //console.log(key)
  }
 
// Méthode permettant de récupérer l'option saisie par l'utilisateur
  getOption(option : string){
    this.surPlaceOuEmporter = true
    this.optionSE = option
    
  }
}
