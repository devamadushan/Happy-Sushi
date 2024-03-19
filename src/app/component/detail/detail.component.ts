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

box : any = 0
lesDetailDeBox :Box | undefined
  constructor(private route : ActivatedRoute,private boxService :BoxsService) {
    
  }

ngOnInit():void{
this.route.params.subscribe(params =>{
  let id = params['box']
  this.box =numberAttribute(id)
  this.boxService.getBoxs().subscribe((lesBoxs)=>{
    this.lesDetailDeBox = this.boxService.getBoxsById(lesBoxs,this.box)
    console.log("testttt ::: :",this.lesDetailDeBox)
    console.log("id :: ",this.box)
  })  
})


}



}