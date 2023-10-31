package com.turisteo.turisteoApi.domain.gastronomia;

import com.turisteo.turisteoApi.domain.paises.PaisEntity;

public record GastronomiaDtoG(

        Long id,
        String nombre_plato,
        String imagen,
        PaisEntity paisid
) {

    public GastronomiaDtoG(GastronomiaEntity gastronomia){
        this(gastronomia.getId(), gastronomia.getNombre_plato(), gastronomia.getImagen(), gastronomia.getPaisEntity());
    }
}
