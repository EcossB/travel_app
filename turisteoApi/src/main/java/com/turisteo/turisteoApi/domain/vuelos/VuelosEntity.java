package com.turisteo.turisteoApi.domain.vuelos;


import com.turisteo.turisteoApi.domain.paises.PaisEntity;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "vuelos")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(of = "id")
public class VuelosEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String link_vuelos;

    @ManyToOne
    @JoinColumn(name = "pais_id")
    private PaisEntity paisEntity;


}
