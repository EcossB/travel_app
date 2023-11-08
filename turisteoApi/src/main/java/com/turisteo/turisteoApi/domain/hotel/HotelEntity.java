package com.turisteo.turisteoApi.domain.hotel;


import com.fasterxml.jackson.annotation.JsonProperty;
import com.turisteo.turisteoApi.domain.paises.PaisEntity;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "hoteles")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(of = "id")

public class HotelEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String nombre_hotel;
    private float valoracion;
    private String imagen_hotel;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "pais_id")
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private PaisEntity paisEntity;


    public HotelEntity(HotelDtoP hotelDtoP){
        this.nombre_hotel = hotelDtoP.nombre_hotel();
        this.valoracion = hotelDtoP.valoracion();
        this.imagen_hotel = hotelDtoP.imagen_hotel();
        this.paisEntity = hotelDtoP.paisId();
    }

    public void actualizarHoteles(HotelDtoPut hotelDtoPut){
        this.nombre_hotel = hotelDtoPut.nombre_hotel();
        this.valoracion = hotelDtoPut.valoracion();
        this.imagen_hotel = hotelDtoPut.imagen_hotel();
        this.paisEntity = hotelDtoPut.paisId();
    }
}
