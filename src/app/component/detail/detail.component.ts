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
export class DetailComponent implements OnInit{

box : number = 0
lesDetailDeBox :Box | undefined
  constructor(private route : ActivatedRoute,private boxService :BoxsService , private detailBox:Box ) {
    this.lesDetailDeBox=undefined
  }

ngOnInit():void{
this.route.params.subscribe(params =>{

  let id = params['box']
  this.box =numberAttribute(id)
  let lesBox = this.boxService.getBoxs()
  //lesDetailDeBox = this.boxService.getBoxsById(box)
  

  //console.log("box : :" , this.box)
})


}

getDetailBox(){



}

}