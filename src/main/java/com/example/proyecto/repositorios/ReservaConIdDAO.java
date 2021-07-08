package com.example.proyecto.repositorios;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.example.proyecto.entidades.ReservaConId;
@RepositoryRestResource(path = "reservaconids", itemResourceRel = "reservaconid", collectionResourceRel = "reservaconids")
public interface ReservaConIdDAO extends JpaRepository<ReservaConId, Long>{

}
