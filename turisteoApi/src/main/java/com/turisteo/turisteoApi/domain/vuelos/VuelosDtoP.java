package com.turisteo.turisteoApi.domain.vuelos;

import com.turisteo.turisteoApi.domain.paises.PaisEntity;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record VuelosDtoP(

        @NotBlank
        String linkVuelo,
        @NotNull
        PaisEntity paisId
) {
}
