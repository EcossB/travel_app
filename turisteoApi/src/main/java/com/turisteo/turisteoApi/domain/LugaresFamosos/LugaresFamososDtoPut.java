package com.turisteo.turisteoApi.domain.LugaresFamosos;

import com.turisteo.turisteoApi.domain.paises.PaisEntity;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record LugaresFamososDtoPut(

        @NotBlank
        Long id,
        @NotBlank
        String nombre,
        @NotBlank
        String descripcion,
        @NotBlank
        String imagen,
        @NotNull
        Long paisId
) {
}
