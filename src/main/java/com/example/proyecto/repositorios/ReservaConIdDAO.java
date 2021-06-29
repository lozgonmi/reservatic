package com.example.proyecto.repositorios;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;

import com.example.proyecto.entidades.ReservaConId;

@RepositoryRestResource(path = "reservaconids", itemResourceRel = "reservaconid", collectionResourceRel = "reservaconids")
public interface ReservaConIdDAO extends JpaRepository<ReservaConId, Long>{
	//@RestResource(path="reservalibre")
   // List<ReservaConId> findByIdActivoAndTemporalBetween(@Param("activo")long idActivo, @Param("fechainicio") LocalDateTime fechaInicio, @Param("fechafin") LocalDateTime fechaFin);


}
