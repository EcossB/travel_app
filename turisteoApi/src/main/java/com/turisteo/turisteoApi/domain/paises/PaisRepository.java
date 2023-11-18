package com.turisteo.turisteoApi.domain.paises;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PaisRepository extends JpaRepository<PaisEntity, Long> {

    PaisEntity findByNombre( String Nombre);

    List<PaisEntity> findByContinente(Continentes continente);
}
