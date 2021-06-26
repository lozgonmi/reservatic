import { ContentChildren } from "@angular/core";
import { Aula } from "./aula";
import { Usuario } from "./usuario";

export interface Reserva {
    id: number;
    fechaInicio: string;
    fechaFin: string;
    usuario: string;
    activo:string;
    
}