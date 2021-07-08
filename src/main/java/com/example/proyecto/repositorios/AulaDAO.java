package com.example.proyecto.repositorios;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.example.proyecto.entidades.Aula;
@RepositoryRestResource(path = "aulas", itemResourceRel = "aula", collectionResourceRel = "aulas")
public interface AulaDAO extends JpaRepository<Aula, Long>, AulaDAOCustom{

}
