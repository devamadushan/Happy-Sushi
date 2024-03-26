import { Component, Input, input } from '@angular/core';
import { Box } from '../../modele/Box';
import { PanierService } from '../../service/panier.service';
import { Ligne } from '../../modele/Ligne';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrl: './panier.component.css'
})

export class PanierComponent {
  // recupere le panier depuis le parent
  @Input({required:true}) panier:Array<Ligne> = []
  // récupere l'option depuis le parent
  @Input({required:true}) option:string = ""
  
  constructor(private boxes : PanierService){
    
  }
// methode qui permet de changer des option quand l'utilisateur click sur le button (switch)
  changeOption(){
   if(this.option == "Sur place"){
    this.option = "Emporter"
   } else{
    this.option = "Sur place"
   }
  }


}
