import { ActivationEnd } from "@angular/router";
import { environment } from "src/environments/environment";
import { Aula } from "./aula";
import { Reserva } from "./reserva";
import { Usuario } from "./usuario";

export class ReservaImpl implements Reserva{
   
    id: number;
    fechaInicio: string;
    fechaFin: string;    
    usuario: string;
    activo:string;
    reservaAprobada : boolean;
    
       
    constructor( ){
       
    }
    
        
        
    
}