package com.example.proyecto.entidades;

import java.util.Collection;

import javax.persistence.CascadeType;
import javax.persistence.DiscriminatorColumn;
import javax.persistence.DiscriminatorType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.OneToMany;

import com.example.proyectolib.entidades.Activo;
import com.example.proyectolib.entidades.Reserva;
import com.example.proyectolib.entidades.Usuario;

//@Entity(name = "ACTIVOS")
//@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
//@DiscriminatorColumn(name = "TIPO", discriminatorType = DiscriminatorType.STRING)
public abstract class ActivoConId extends Activo {

	// @Id
	// @GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	private int capacidad;

	@Override
	@OneToMany(targetEntity = ReservaConId.class)
	public Collection<Reserva> getReservas() {
		return super.getReservas();
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public int getCapacidad() {
		return capacidad;
	}

	public void setCapacidad(int capacidad) {
		this.capacidad = capacidad;
	}

	public void addReserva(ReservaConId reserva) {
		getReservas().add(reserva);
		reserva.setActivo(this);
	}

}
