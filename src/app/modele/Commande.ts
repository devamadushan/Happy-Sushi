import { Ligne } from "./Ligne"

export class Commande{
 
    lignes:Array<Ligne>
    id:number
    option: string
    constructor(lignes:Array<Ligne>,id:number |undefined=undefined,option : string){
        this.lignes=lignes
        if(id==undefined){
            this.id=this.generateId()
        }else{
            this.id=id
        }
        this.option = option
    }

    generateId():number{

        return Math.random() * (100 - 1) + 1;
    }
    
}