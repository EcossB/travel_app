package com.turisteo.turisteoApi.domain.gastronomia;

public record GastronomiaDtoG(

        Long id,
        String nombre_plato,
        String imagen

        // campo relacion con pais.
) {
}
