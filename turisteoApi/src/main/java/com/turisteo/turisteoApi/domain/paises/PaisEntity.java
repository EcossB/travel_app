package com.turisteo.turisteoApi.domain.paises;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.turisteo.turisteoApi.domain.LugaresFamosos.LugaresFamososEntity;
import com.turisteo.turisteoApi.domain.gastronomia.GastronomiaEntity;
import com.turisteo.turisteoApi.domain.hotel.HotelEntity;
import com.turisteo.turisteoApi.domain.vuelos.VuelosEntity;
import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "paises")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(of = "pais_id")
@JsonIgnoreProperties({"hibernateLazyInitializer"})
public class PaisEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long pais_id;
    private String nombre;
    private String descripcion;

    @Enumerated(EnumType.STRING)
    private Continentes continente;

    private String bandera;
    private String imagen1;
    private String imagen2;

    @OneToMany(mappedBy = "paisEntity" , cascade = CascadeType.ALL)
    private List<LugaresFamososEntity> lugaresFamosos = new ArrayList<>();

    @OneToMany(mappedBy = "paisEntity", cascade = CascadeType.ALL)
    private List<GastronomiaEntity> gastronomia = new ArrayList<>();

    @OneToMany(mappedBy = "paisEntity")
    private List<HotelEntity> hotel;

    @OneToMany(mappedBy = "paisEntity")
    private List<VuelosEntity> vuelos;


    public PaisEntity(PaisDtoP paisDtoP) {
        this.nombre = paisDtoP.nombre();
        this.descripcion = paisDtoP.descripcion();
        this.continente = paisDtoP.continentes();
        this.bandera = paisDtoP.bandera();
        this.imagen1 = paisDtoP.imagen1();
        this.imagen2 = paisDtoP.imagen2();
    }

    public void actualizarPais(PaisDtoPut paisDtoPut){
        this.nombre = paisDtoPut.nombre();
        this.descripcion = paisDtoPut.descripcion();
        this.continente = paisDtoPut.continentes();
        this.bandera = paisDtoPut.bandera();
        this.imagen1 = paisDtoPut.imagen1();
        this.imagen2 = paisDtoPut.imagen2();
    }
}

