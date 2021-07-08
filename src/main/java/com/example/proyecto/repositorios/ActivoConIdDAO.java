package com.example.proyecto.repositorios;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.example.proyecto.entidades.ActivoConId;

@RepositoryRestResource(path = "activos", itemResourceRel = "activo", collectionResourceRel = "activos")
public interface ActivoConIdDAO extends JpaRepository<ActivoConId, Long>{

}
