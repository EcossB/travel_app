package com.turisteo.turisteoApi.domain.paises;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record PaisDtoPut(

        @NotNull
        Long id,

        @NotBlank
        String nombre,
        @NotBlank
        String descripcion,
        @NotNull
        Continentes continentes,
        @NotBlank
        String bandera,
        @NotBlank
        String imagen1,
        @NotBlank
        String imagen2
) {
}
