package com.example.proyecto.repositorios;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.example.proyecto.entidades.Coche;
@RepositoryRestResource(path = "coches", itemResourceRel = "coche", collectionResourceRel = "coches")
public interface CocheDAO extends JpaRepository<Coche, Long>{

}
