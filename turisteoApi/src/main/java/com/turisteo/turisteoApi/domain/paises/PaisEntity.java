package com.turisteo.turisteoApi.domain.paises;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "paises")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(of = "pais_id")
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

    @OneToMany(mappedBy = "paisEntity")
    private List<LugaresFamososEntity> lugaresFamosos;

    @OneToMany(mappedBy = "paisEntity")
    private List<GastronomiaEntity> gastronomia;

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

