package com.example.proyecto.repositorios;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Collection;
import java.util.stream.Collectors;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import com.example.proyecto.entidades.Aula;
import com.example.proyectolib.entidades.Reserva;

@Transactional(readOnly = true)
public class AulaDAOImpl implements AulaDAOCustom {

	@Autowired
	AulaDAO aulaDAO;
	@Autowired
	ReservaConIdDAO reservaConIdDAO;
	@PersistenceContext
	EntityManager entityManager;

	@Override
	public Collection<Reserva> getReservasDeActivoEntreFechas(Long id, LocalDateTime fechaInicio, LocalDateTime fechaFin) {

		Aula aula =  aulaDAO.getOne(id);
		Collection<Reserva> reservas = aula.getReservas();	
		Collection<Reserva> reservasFiltradasCollection = new ArrayList<Reserva>();
		reservasFiltradasCollection= reservas.stream()
				.filter(j -> (j.getFechaInicio().isBefore(fechaInicio) &&  j.getFechaFin().isAfter(fechaInicio)) ||
						j.getFechaInicio().isBefore(fechaFin) && j.getFechaFin().isAfter(fechaFin))
				.collect(Collectors.toList());
     	return reservasFiltradasCollection;
	}
	

	@Override
	public Collection<Aula> getAulasLibresEntreFechasConRequisitos(int capacidad, boolean proyector, LocalDateTime fechaInicio, LocalDateTime fechaFin)
	{
		Collection<Aula> aulas = aulaDAO.findAll();
		Collection<Aula> aulasPosiblesAulas = new ArrayList<Aula>();
		Collection<Aula> aulasReservables = new ArrayList<Aula>();
		
		for (Aula aula : aulas) {
			
			if(aula.getCapacidad()>= capacidad && aula.isProyector()== proyector) {
				
				aulasPosiblesAulas.add(aula);				
			}			
		}
		
		for (Aula aula : aulasPosiblesAulas) {
			System.out.println(getReservasDeActivoEntreFechas(aula.getId(), fechaInicio, fechaFin).isEmpty());
			System.out.println(aula.getNombreAula());
			if(getReservasDeActivoEntreFechas(aula.getId(), fechaInicio, fechaFin).isEmpty()==true) {
				aulasReservables.add(aula);				
			}
		}		
		System.out.println(aulasReservables.size());
		return aulasReservables;
	}
}