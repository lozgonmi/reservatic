package com.example.proyecto.repositorios;

import java.util.List;

import com.example.proyecto.entidades.ReservaConId;

public interface ReservaConIdDAOCustom {
	 List<ReservaConId> findByIdActivoAndTemporalBetween();
}
