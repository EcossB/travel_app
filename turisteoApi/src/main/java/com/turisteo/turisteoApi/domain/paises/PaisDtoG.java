package com.turisteo.turisteoApi.domain.paises;


import com.turisteo.turisteoApi.domain.LugaresFamosos.LugaresFamososDtoG;

/*
Este record sirve como un puente entre las entidades y los clientes para mandar y obtener datos.
 */
public record PaisDtoG(

        Long id,
        String nombre,
        String descripcion,
        Continentes continentes,
        String bandera,
        String imagen1,
        String imagen2



) {
}
