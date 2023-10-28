package com.turisteo.turisteoApi.domain.gastronomia;



import com.turisteo.turisteoApi.domain.paises.PaisEntity;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Table (name = "gastronomia")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(of = "id")

public class GastronomiaEntity {

    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private long id;
    private String nombre_plato;
    private String imagen;

    @ManyToOne
    @JoinColumn(name = "pais_id")
    private PaisEntity paisEntity;


}
