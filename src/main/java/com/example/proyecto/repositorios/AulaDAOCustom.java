package com.example.proyecto.repositorios;

import java.time.Instant;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Collection;

import com.example.proyecto.entidades.Aula;
import com.example.proyectolib.entidades.Reserva;


public interface AulaDAOCustom {
	
	 Collection<Reserva> getReservasDeActivoEntreFechas(Long id, LocalDateTime fechaInicio, LocalDateTime fechaFin);
	 Collection<Aula> getAulasLibresEntreFechasConRequisitos(int capacidad, boolean proyector, LocalDateTime fechaInicio, LocalDateTime fechaFin);


}
