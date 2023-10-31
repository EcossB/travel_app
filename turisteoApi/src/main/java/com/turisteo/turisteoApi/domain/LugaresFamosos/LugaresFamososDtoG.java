package com.turisteo.turisteoApi.domain.LugaresFamosos;

import com.turisteo.turisteoApi.domain.paises.PaisEntity;

public record LugaresFamososDtoG(

     Long id,
     String nombre,
     String descripcion,
     String imagen,

     PaisEntity pais_id


) {
    public LugaresFamososDtoG(LugaresFamososEntity lugaresFamosos){
        this(lugaresFamosos.getId(), lugaresFamosos.getNombre(), lugaresFamosos.getDescripcion(), lugaresFamosos.getImagen(), lugaresFamosos.getPaisEntity());
    }
}
