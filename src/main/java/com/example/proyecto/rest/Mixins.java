package com.example.proyecto.rest;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;

public class Mixins {

	@JsonPropertyOrder({ "id", "nombreAula", "proyector"})
	@JsonIgnoreProperties(value = { "descripcion" , "capacidad","ubicacion","telefonoIncidencias"})
	public static interface Aula {
		
//		@JsonProperty("nombreCompleto")
//		abstract String getNombre();
//		
	
	}
	
	@JsonPropertyOrder({ "id", "marca", "modelo", "matricula"})
	@JsonIgnoreProperties(value = { "capacidad", "descripcion",  "telefonoIncidencias" })
	public static interface Coche {
		
//		@JsonProperty("nombreCompleto")
//		abstract String getNombre();
//		
	
	}

	@JsonPropertyOrder({ "id", "fechaInicio", "fechaFin", "activo", "usuario"})
//	@JsonIgnoreProperties(value = { "fechaIngresoFas" })
	public static interface ReservaConId {
		
//		@JsonProperty("nombreCompleto")
//		abstract String getNombre();
//		
}
	@JsonPropertyOrder({ "id", "numeroTelefono", "correo", "usuarioReservas"})
//	@JsonIgnoreProperties(value = { "fechaIngresoFas" })
	public static interface UsuarioConId {
		
//		@JsonProperty("nombreCompleto")
//		abstract String getNombre();
//		
}
	@JsonPropertyOrder({ "id", "tipo", "capacidad", "nombreAula", "proyector", "marca"})
//	@JsonIgnoreProperties(value = { "fechaIngresoFas" })
	public static interface ActivoConAforo {
		
//		@JsonProperty("nombreCompleto")
//		abstract String getNombre();
//		
}
}
