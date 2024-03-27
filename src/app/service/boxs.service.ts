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
// Récupère les API avec l'URL indiquée dans l'environnement.
  public getBoxs(): Observable<any>{
    console.log(this.http.get(environment.apiBaseUrl))
    return this.http.get(environment.apiBaseUrl)
  }


// Retourne la boîte présente dans une liste de boîtes en comparant un idBox récupéré en paramètre.
  getBoxsById(lesBoxs:Array<Box>,idBox: number) {
   return lesBoxs.find((uneBox:Box)=>uneBox.id==idBox)
    
  }
  

}
