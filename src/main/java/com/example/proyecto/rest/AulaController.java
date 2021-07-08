package com.example.proyecto.rest;

import java.time.LocalDateTime;
import java.util.Collection;
import org.springframework.data.rest.webmvc.PersistentEntityResource;
import org.springframework.data.rest.webmvc.PersistentEntityResourceAssembler;
import org.springframework.data.rest.webmvc.RepositoryRestController;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.hateoas.CollectionModel;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import com.example.proyecto.entidades.Aula;
import com.example.proyecto.repositorios.AulaDAO;

@RepositoryRestController
@RequestMapping(path = "/aulas/search")
public class AulaController {

	private AulaDAO aulaDAO;

	public AulaController(AulaDAO aulaDAO) {

		super();
		this.aulaDAO = aulaDAO;
	}

	@GetMapping("/existen")
	@ResponseBody
	public CollectionModel<PersistentEntityResource> getAulasLibresEntreFechasConRequisitos(
			@RequestParam("capacidad") int capacidad, 
			@RequestParam("proyector") boolean proyector, 
			@RequestParam(value="fechaInicio")
			@DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME)
			LocalDateTime fechaInicio,
			@RequestParam(value="fechaFin")
			@DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME)
			LocalDateTime fechaFin,			
			PersistentEntityResourceAssembler assembler) {
		
		Collection<Aula> aulas = aulaDAO.getAulasLibresEntreFechasConRequisitos(capacidad, proyector,fechaInicio, fechaFin);

		return assembler.toCollectionModel(aulas);
	}

}