package com.example.proyecto.entidades;

import java.util.Collection;

import javax.persistence.Column;
import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.example.proyectolib.entidades.Reserva;


@Entity
@DiscriminatorValue("CO")
public class Coche extends ActivoConId {
//	@Id
//	@GeneratedValue(strategy = GenerationType.IDENTITY)
//	@Column(unique = true)
//	private long id;
	private String marca;
	private String modelo;
	private String matricula;
	

	public String getMarca() {
		return marca;
	}

	public void setMarca(String marca) {
		this.marca = marca;
	}

	public String getModelo() {
		return modelo;
	}

	public void setModelo(String modelo) {
		this.modelo = modelo;
	}

	public String getMatricula() {
		return matricula;
	}

	public void setMatricula(String matricula) {
		this.matricula = matricula;
	}

	

}
