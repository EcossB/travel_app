package com.turisteo.turisteoApi.domain.hotel;

import com.turisteo.turisteoApi.domain.paises.PaisEntity;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record HotelDtoPut(

        @NotNull
        long id,

        @NotBlank
        String nombre_hotel,

        @NotNull
        float valoracion,

        @NotBlank
        String imagen_hotel,

        @NotNull
        PaisEntity paisId
) {
}
