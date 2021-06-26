package com.example.proyecto;

import java.util.Arrays;
import java.util.Collections;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.ImportResource;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

import com.example.proyecto.entidades.ActivoConId;
import com.example.proyecto.entidades.Aula;
import com.example.proyecto.entidades.Coche;
import com.example.proyecto.entidades.ReservaConId;
import com.example.proyecto.entidades.UsuarioConId;
import com.example.proyecto.rest.Mixins;
import com.fasterxml.jackson.databind.ObjectMapper;



@Configuration
@ComponentScan("com.example.proyecto.entidades")
public class ConfiguracionPorJava {

	@Bean
	public ObjectMapper getObjectMapper() {

		ObjectMapper mapper = new ObjectMapper();
		mapper.addMixIn(Aula.class, Mixins.Aula.class);
		mapper.addMixIn(Coche.class, Mixins.Coche.class);
		mapper.addMixIn(ReservaConId.class, Mixins.ReservaConId.class);
		mapper.addMixIn(UsuarioConId.class, Mixins.UsuarioConId.class);
		mapper.addMixIn(ActivoConId.class, Mixins.ActivoConAforo.class);
		

		return mapper;
	}
	
	@Bean
	CorsFilter corsFilter() {
		final UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
		final CorsConfiguration config = new CorsConfiguration();
		config.setAllowCredentials(false);
		config.setAllowedOrigins(Collections.singletonList("*"));
		config.setAllowedHeaders(Arrays.asList("Origin", "Content-Type", "Accept"));
		config.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "OPTIONS", "DELETE", "PATCH"));
		source.registerCorsConfiguration("/**", config);

		return new CorsFilter(source);
	}

}
