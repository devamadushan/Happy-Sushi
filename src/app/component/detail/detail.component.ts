import { Component, OnInit, numberAttribute } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { Box } from '../../modele/Box';
import { ActivatedRoute } from '@angular/router';
import { PanierService } from '../../service/panier.service';
import { BoxsService } from '../../service/boxs.service';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {
// ID d'une box
box : any = 0
// Objet d'une box en question
lesDetailDeBox :Box | undefined
  constructor(private route : ActivatedRoute,private boxService :BoxsService) {
    
  }

ngOnInit():void{
  // recupere le lien qui est present dans l'URL
this.route.params.subscribe(params =>{
  let id = params['box']
  this.box =numberAttribute(id)
  // Récupere la Box conserner et cree un objet lesDetailDeBox
  this.boxService.getBoxs().subscribe((lesBoxs)=>{
    this.lesDetailDeBox = this.boxService.getBoxsById(lesBoxs,this.box)
    //console.log("testttt ::: :",this.lesDetailDeBox)
    //console.log("id :: ",this.box)
  })  
})


}



}