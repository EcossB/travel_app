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
    private Continentes continentes;
    private String bandera;
    private String imagen1;
    private String imagen2;



}

