import { Injectable} from '@angular/core';
import { Box } from '../modele/Box';

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  constructor() { }
  
  getAllBoxes(){

    return JSON.parse(localStorage.getItem('lesBoxes') || '[]')
  }

  setPanierBoxes(boxes : any){
  let panier = boxes

  localStorage.setItem("lesBoxes",JSON.stringify(panier))

  }
}
