package com.turisteo.turisteoApi.domain.LugaresFamosos;



import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "lugaresfamosos")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(of = "id")

public class LugaresFamososEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String nombre;
    private String descripcion;
    private String imagen;

    /*
    TODO
    @ManyToOne
    @JoinColumn(name = "pais_id")
    private PaisEntity paisEntity;
     */

}
