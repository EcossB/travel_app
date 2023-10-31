package com.turisteo.turisteoApi.domain.gastronomia;

import com.turisteo.turisteoApi.domain.paises.PaisEntity;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record GastronomiaDtoPut(

        @NotNull
        Long id,
        @NotBlank
        String nombrePlato,
        @NotBlank
        String linkImagen,
        @NotNull
        PaisEntity paisId
) {
}
