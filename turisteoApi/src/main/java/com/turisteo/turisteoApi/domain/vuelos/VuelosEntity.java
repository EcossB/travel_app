package com.turisteo.turisteoApi.domain.vuelos;


import com.fasterxml.jackson.annotation.JsonProperty;
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

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "pais_id")
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private PaisEntity paisEntity;


    public VuelosEntity(VuelosDtoP vuelosDtoP) {
        this.link_vuelos = vuelosDtoP.linkVuelo();
        this.paisEntity = vuelosDtoP.paisId();
    }

    public void actualizarVuelos(VuelosDtoPut vuelosDtoPut){
        this.link_vuelos = vuelosDtoPut.linkVuelo();
        this.paisEntity = vuelosDtoPut.PaisId();
    }
}
