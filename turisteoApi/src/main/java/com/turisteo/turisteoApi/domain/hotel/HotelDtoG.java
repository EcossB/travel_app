package com.turisteo.turisteoApi.domain.hotel;

public record HotelDtoG(
        Long id,
        String nombre_hotel,
        Float valoracion,
        String imagen_hotel,
        Long pais_id
) {

    public HotelDtoG(HotelEntity hotel){
        this(hotel.getId(), hotel.getNombre_hotel(), hotel.getValoracion(), hotel.getImagen_hotel(), hotel.getPaisEntity());
    }
}
