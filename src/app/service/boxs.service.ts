import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Observable, map } from 'rxjs';
import { Ligne } from '../modele/Ligne';
import { Box } from '../modele/Box';

@Injectable({
  providedIn: 'root'
})
export class BoxsService {

  constructor(private http:HttpClient) { 
  
  }

  public getBoxs(): Observable<any>{
    console.log(this.http.get(environment.apiBaseUrl))
    return this.http.get(environment.apiBaseUrl)
  }



  getBoxsById(lesBoxs:Array<Box>,idBox: number) {
   return lesBoxs.find((uneBox:Box)=>uneBox.id==idBox)
    /* return new Promise((resolve, reject) => {
      this.getBoxs().subscribe((lesBoxes: Array<Box>) => {
        const box = lesBoxes.find((box: Box) => box.id === idBox);
        if (box) {
          resolve(box); // Résoudre la promesse avec la boîte trouvée
        } else {
          resolve(undefined); // Résoudre la promesse avec undefined si aucune boîte n'est trouvée
        }
      });
    }); */
  }
  

}
