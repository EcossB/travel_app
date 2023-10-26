package com.turisteo.turisteoApi.domain.hotel;

public record HotelDtoG(
        Long id,
        String nombre_hotel,
        Float valoracion,
        String imagen_hotel,
        Long pais_id
) {
}
