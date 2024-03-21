import { Ligne } from "./Ligne"

export class Commande{
 
    lignes:Array<Ligne>
    id:number
    surPlace:boolean=false
    constructor(lignes:Array<Ligne>,id:number |undefined=undefined){
        this.lignes=lignes
        if(id==undefined){
            this.id=this.generateId()
        }else{
            this.id=id
        }
    }

    generateId():number{

        return Math.random() * (100 - 1) + 1;
    }
    
}