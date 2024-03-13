import { Component } from '@angular/core';
import { Box } from '../../modele/Box';
import { PanierService } from '../../service/panier.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrl: './panier.component.css'
})
export class PanierComponent {
  lesBoxes:Array<Box> = []

  constructor(private boxes : PanierService){

  }

  static addPanier(nom :String){
    console.log(nom)
  }
}
