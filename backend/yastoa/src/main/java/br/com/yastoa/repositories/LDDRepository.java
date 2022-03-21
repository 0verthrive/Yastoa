package br.com.yastoa.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.yastoa.entities.ListaDeDesejos;

@Repository
public interface LDDRepository extends JpaRepository<ListaDeDesejos, Long> {

	
}
