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
// récupere les API avec l'URL qui est indiquer dans l'environement 
  public getBoxs(): Observable<any>{
    console.log(this.http.get(environment.apiBaseUrl))
    return this.http.get(environment.apiBaseUrl)
  }


// retourne le Box qui est present dans une list de box en comparenet un idBOx recuperer en parametre
  getBoxsById(lesBoxs:Array<Box>,idBox: number) {
   return lesBoxs.find((uneBox:Box)=>uneBox.id==idBox)
    
  }
  

}
