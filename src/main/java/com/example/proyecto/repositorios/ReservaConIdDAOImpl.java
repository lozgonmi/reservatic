package com.example.proyecto.repositorios;

import java.time.LocalDateTime;
import java.util.List;

import com.example.proyecto.entidades.ReservaConId;


public interface ReservaConIdDAOImpl {

	public List<ReservaConId> findByReservaLibreDosFechas(long idActivo,LocalDateTime fechaInicio, LocalDateTime fechaFin);
}



