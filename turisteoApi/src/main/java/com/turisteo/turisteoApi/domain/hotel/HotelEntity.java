package com.turisteo.turisteoApi.domain.hotel;


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

    /*
    TODO
    @ManyToOne
    @JoinColumn(name = "pais_id")
    private PaisEntity paisEntity;
     */
}
