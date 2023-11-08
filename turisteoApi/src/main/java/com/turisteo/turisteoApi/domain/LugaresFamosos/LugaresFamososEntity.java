package com.turisteo.turisteoApi.domain.LugaresFamosos;



import com.fasterxml.jackson.annotation.JsonProperty;
import com.turisteo.turisteoApi.domain.paises.PaisEntity;
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
    private Long id;
    private String nombre;
    private String descripcion;
    private String imagen;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "pais_id")
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private PaisEntity paisEntity;

    public LugaresFamososEntity(LugaresFamososDtoP lugaresFamososDtoP){
        this.nombre = lugaresFamososDtoP.nombre();
        this.descripcion = lugaresFamososDtoP.descripcion();
        this.imagen = lugaresFamososDtoP.imagen();
        this.paisEntity = lugaresFamososDtoP.paisId();
    }

    public void actualizarLugaresFamosos(LugaresFamososDtoPut lugaresFamososDtoPut){
        this.nombre = lugaresFamososDtoPut.nombre();
        this.descripcion = lugaresFamososDtoPut.descripcion();
        this.imagen = lugaresFamososDtoPut.imagen();
        this.paisEntity = lugaresFamososDtoPut.paisId();
    }
}
