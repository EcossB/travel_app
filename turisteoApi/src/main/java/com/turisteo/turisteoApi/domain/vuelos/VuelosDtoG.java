package com.turisteo.turisteoApi.domain.vuelos;

import com.turisteo.turisteoApi.domain.paises.PaisEntity;

public record VuelosDtoG(
        Long id,
        String vuelo,
        PaisEntity pais_id
) {


    public VuelosDtoG(VuelosEntity vuelos){
        this(vuelos.getId(), vuelos.getLink_vuelos(), vuelos.getPaisEntity());
    }
}
