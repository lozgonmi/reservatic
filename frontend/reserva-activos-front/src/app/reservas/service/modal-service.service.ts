import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  modal: boolean = false;
  editar: boolean = false;

  constructor() { }

  abrirModal() {
    this.modal = true;
  }

  cerrarModal() {
  //location.reload();
    this.modal = false;
  }

  abrirModalEditar() {
    this.editar = true;
  }

  cerrarModalEditar() {
   // location.reload();
    this.editar = false;
  }
}

