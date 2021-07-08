package com.example.proyecto.entidades;

import java.util.Collection;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.example.proyectolib.entidades.Activo;
import com.example.proyectolib.entidades.Reserva;
import com.example.proyectolib.entidades.Usuario;


//@Entity
public class UsuarioConId extends Usuario{
	

//	@Id
//	@GeneratedValue(strategy = GenerationType.IDENTITY)
	long id;
	
	@Override
	@OneToMany(targetEntity = ReservaConId.class)
	public Collection<Reserva> getReservas() {
		return super.getReservas();
	}
	
	@Override
	@OneToMany(targetEntity = ActivoConId.class)
	public Collection<Activo> getActivos() {
		return super.getActivos();
	}
	
	public long getId() {
		return id;
	}


	public void setId(long id) {
		this.id = id;
	}


	public void addReserva(ReservaConId reserva) {
		getReservas().add(reserva);
		reserva.setUsuario(this);
	}
	
	public void addActivo(ActivoConId activo) {
		getActivos().add(activo);
		activo.setUsuario(this);
	}

		public UsuarioConId() {
			super(); 
		}

}
