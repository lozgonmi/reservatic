import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError, map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Aula } from '../models/aula';
import { AulaImpl } from '../models/aula-impl';
import { Reserva } from '../models/reserva';
import { ReservaImpl } from '../models/reserva-impl';
import { Usuario } from '../models/usuario';
import { UsuarioImpl } from '../models/usuario-impl';


@Injectable({
  providedIn: 'root'
})
export class ReservaService {

   private urlEndPoint: string = environment.hostControladores + 'aulas';
   private urlReservas: string = environment.hostControladores + 'reservaconids';
   private urlUsuario: string = environment.hostControladores + 'usuarioconids';
  

  constructor(
    private http: HttpClient,
    private router: Router) { }

  getAulas() : Observable<any>{
    return this.http.get<any>(this.urlEndPoint)
   
  }

  mapearAulas(response: any): Aula[] {
    let reservas: Aula[] = [];
    let reservaMapeada : Aula;
    response._embedded.aulas.forEach((e) => {
      reservaMapeada = this.mapearAula(e);
      
      
      reservas.push(reservaMapeada);
    });
    
    return reservas;
  }
  mapearAula(reservaAPI: any) : AulaImpl{
    let reserva: AulaImpl = new AulaImpl();
    let urlReserva = reservaAPI._links.aula.href;
    let index = urlReserva.lastIndexOf("/");
    reserva.id = urlReserva.substring(index + 1);
    reserva.nombreAula = reservaAPI.nombreAula;
    reserva.proyector = reservaAPI.proyector;
  
   
    return reserva;

  }
  getUsuarios() : Observable<any>{
    return this.http.get<any>(this.urlUsuario)
   
  }
  mapearUsuarios(response: any): Usuario[] {
    let usuarios: Usuario[] = [];
    let usuarioMapeado : Usuario;
    response._embedded.usuarioconids.forEach((e) => {
      usuarioMapeado = this.mapearUsuario(e);
      
      
      usuarios.push(usuarioMapeado);
    });
    console.log(usuarios)
    return usuarios;
  }

  mapearUsuario(reservaAPI: any) : UsuarioImpl{
    let usuario: UsuarioImpl = new UsuarioImpl();
    let urlUsuario = reservaAPI._links.usuarioconid.href;
    let index = urlUsuario.lastIndexOf("/");
    usuario.id = urlUsuario.substring(index + 1);
    usuario.numeroTelefono = reservaAPI.numeroTelefono;
    usuario.correo = reservaAPI.correo;
  
    console.log(usuario);
    return usuario;

  }
  getAulaId(id): Observable<Aula> {
    console.log(id);
    return this.http.get<Aula>(`${this.urlEndPoint}/${id}`).pipe(
      catchError((e) => {
        if (e.status !== 401 && e.error.mensaje) {
          this.router.navigate(['/propietarios']);
          console.error(e.error.mensaje);
        }
        return throwError(e);
      })
    );
  }
  getAulaReservaId(id): Observable<Aula> {
    console.log(id);
    return this.http.get<Aula>(`${this.urlReservas}/${id}/activo`).pipe(
      catchError((e) => {
        if (e.status !== 401 && e.error.mensaje) {
          this.router.navigate(['/propietarios']);
          console.error(e.error.mensaje);
        }
        return throwError(e);
      })
    );
  }
  getUsuarioReservaId(id): Observable<Usuario> {
    console.log(id);
    return this.http.get<Usuario>(`${this.urlReservas}/${id}/usuario`).pipe(
      catchError((e) => {
        if (e.status !== 401 && e.error.mensaje) {
          this.router.navigate(['/propietarios']);
          console.error(e.error.mensaje);
        }
        return throwError(e);
      })
    );
  }
  getIdAulaReservaId(reservaAPI: any) : AulaImpl{
    let aula: AulaImpl = new AulaImpl();
    let urlAula = reservaAPI._links.aula.href;
    let index = urlAula.lastIndexOf("/");
    aula.id = urlAula.substring(index + 1);
    aula.nombreAula = reservaAPI.nombreAula;
    aula.proyector = reservaAPI.proyector;
  
    return aula;

  }
  getIdUsuarioReservaId(reservaAPI: any) : UsuarioImpl{
    let usuario: UsuarioImpl = new UsuarioImpl();
    let urlUsuario = reservaAPI._links.usuarioconid.href;
    let index = urlUsuario.lastIndexOf("/");
    usuario.id = urlUsuario.substring(index + 1);
    usuario.numeroTelefono = reservaAPI.numeroTelefono;
    usuario.correo = reservaAPI.correo;
  
    console.log(usuario);
    return usuario;

  }
/*
	getReserva(idUsuario: number, idActivo: number): Observable<any> {
    return this.http.get<Reserva[]>(
      `${this.urlReservas}/search/${idUsuario}/activo/${idActivo}`
    );
  }

 mapearReservas(reservaAPI: any): Reserva[]{
  let reservas: Reserva[] = [];
  let reservaMaqueada : Reserva;
  reservaAPI._embedded.reservaconids.forEach((e) => {
    reservaMaqueada = this.mapearReserva(e);
    
    
    reservas.push(reservaMaqueada);
  });
  console.log(reservas)
   return reservas;

 }
 
 


mapearReserva(reservaAPI: any) : ReservaImpl{
  let reserva: ReservaImpl = new ReservaImpl();
  let urlReserva = reservaAPI._links.aula.href;
  let index = urlReserva.lastIndexOf("/");
  reserva.id = urlReserva.substring(index + 1);
  reserva.fechaInicio = reservaAPI.fechaInicio;
  reserva.fechaFin = reservaAPI.fechaFin;

  console.log(reserva);
  return reserva;

}*/
postReserva(reserva: ReservaImpl): Observable<any> {
  return this.http.post(this.urlReservas, reserva)
  .pipe(catchError((e) => {
    alert(e.message);
    return e;
  })
);
}

putReserva(reserva: ReservaImpl): Observable<any> {
  return this.http.put(`${this.urlReservas}/${reserva.id}`, reserva)
  .pipe(catchError((e) => {
    alert(e.message);
    return e;
  })
);
}

borrar(id: number): Observable<Reserva> {
  return this.http
    .delete<Reserva>(`${this.urlReservas}/${id}`)
    .pipe(
      catchError((e) => {
        if (e.error.mensaje) {
          console.error(e.error.mensaje);
        }
        return throwError(e);
      })
    );
}

getReservasActivo(idActivo: number){
  return this.http.get<Reserva[]>(
    `${this.urlEndPoint}/${idActivo}/reservas`
  );
}

mapearReservasActivo(reservaAPI: any): Reserva[]{
  let reservas: Reserva[] = [];
  let reservaActivoMaqueada : Reserva;
  reservaAPI._embedded.reservaconids.forEach((e) => {
    reservaActivoMaqueada = this.mapearReservaActivo(e);
    
    
    reservas.push(reservaActivoMaqueada);
  });
  console.log(reservas)
   return reservas;
}

mapearReservaActivo(reservaAPI: any) : ReservaImpl{
  let reserva: ReservaImpl = new ReservaImpl();
  let urlReserva = reservaAPI._links.self.href;
  let index = urlReserva.lastIndexOf("/");
  reserva.id = urlReserva.substring(index + 1);
  reserva.fechaInicio = reservaAPI.fechaInicio;
  reserva.fechaFin = reservaAPI.fechaFin;

  console.log(reserva);
  return reserva;

}



getReservaId(id): Observable<Reserva> {
  console.log(id);
  return this.http.get<Reserva>(`${this.urlReservas}/${id}`).pipe(
    catchError((e) => {
      if (e.status !== 401 && e.error.mensaje) {
        this.router.navigate(['/propietarios']);
        console.error(e.error.mensaje);
      }
      return throwError(e);
    })
  );
}

mapearReservasId(reservaAPI: any) : ReservaImpl{
  let reserva: ReservaImpl = new ReservaImpl();
  let urlReserva = reservaAPI._links.self.href;
  let index = urlReserva.lastIndexOf("/");
  reserva.id = urlReserva.substring(index + 1);
  reserva.fechaInicio = reservaAPI.fechaInicio;
  reserva.fechaFin = reservaAPI.fechaFin;

  console.log(reserva);
  return reserva;

}

}
