package com.example.proyecto.repositorios;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.example.proyecto.entidades.UsuarioConId;
@RepositoryRestResource(path = "usuarioconids", itemResourceRel = "usuarioconid", collectionResourceRel = "usuarioconids")
public interface UsuarioConIdDAO extends JpaRepository<UsuarioConId, Long>{

}
