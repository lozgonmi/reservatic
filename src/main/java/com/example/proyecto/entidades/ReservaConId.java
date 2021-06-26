package com.example.proyecto.entidades;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import com.example.proyectolib.entidades.Activo;
import com.example.proyectolib.entidades.Reserva;
import com.example.proyectolib.entidades.Usuario;

import net.bytebuddy.implementation.bind.annotation.Super;

//@Entity
public class ReservaConId extends Reserva {

	//@Id
	//@GeneratedValue(strategy = GenerationType.IDENTITY)
	long id;

	@ManyToOne
	ActivoConId activo;

	@ManyToOne
	UsuarioConId usuario;

	public ReservaConId() {
		super();
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public ActivoConId getActivo() {
		return activo;
	}

	public void setActivo(ActivoConId activo) {
		this.activo = activo;
	}

	public UsuarioConId getUsuario() {
		return usuario;
	}

	public void setUsuario(UsuarioConId usuario) {
		this.usuario = usuario;
	}

}
