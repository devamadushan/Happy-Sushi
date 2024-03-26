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

// L'attribut permet de desactiver Modal 'Sur place ou emporter'
surPlaceOuEmporter = false
// option Par defaut 'Sur place'
optionSE = "Sur place"
// L'affichage des cartes quand l'utilisateur na pas click sur un saveur key = 'rien'
key : string = "rien"
// Tout les boxes recuperer par l'API
boxes:Array<Box>=[]
// Une list des Boxes trier par les saveurs
listBoxBySaveurs:Map<string,Array<Box>> = new Map<string,Array<Box>>()
//tout les boxes choisis par l'utilisateur
panier:Array<Ligne>


  constructor(private boxs : BoxsService,private panierService:PanierService){
  // Récupere tout les boxes choisis par l'utilisateur dans le panierService
  this.panier = this.panierService.getAllBoxes()

// Récupere tout les boxes depuis l'API et crée des objets BOXES
    this.boxs.getBoxs().subscribe((resultat)=>{
      for (const uneBox of resultat) {
        let box1=Box.transforme(uneBox)
        this.boxes.push(box1)
      }
      // trie tout les Boxes avec leur Saveurs
      this.boxesBySaveur()
    })
    
    panierService.onMajPanier.subscribe(()=>{
      this.panier=[]
      this.panier = this.panierService.getAllBoxes()
    })
  }


// MÉTHODE QUI PERMET DE TRIER LES BOXES PAR LEUR SAVEURS
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
//permet de ajouter une box dans le panier en utilisant le panier service
  addPanier(box : Box){
  
    this.panier= this.panierService.addPanier(box)
  
   
  }
// permet de changer l'affichage de la carte grace a la clé recupere 'qui trie par le saveur'
  collectKey(key:string){
      this.key = key
      //console.log(key)
  }
 
//méthode qui permet de récupere l'option saisie par l'utilisateur
  getOption(option : string){
    this.surPlaceOuEmporter = true
    this.optionSE = option
    
  }
}
