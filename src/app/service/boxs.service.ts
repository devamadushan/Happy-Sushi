import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
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
  getBoxsById(idBox : number){
    let box = this.getBoxs().subscribe((lesBoxes:Array<Box>)=>{
      lesBoxes.find((box) => box.id == idBox)
    })
 
    return box
  }

}
