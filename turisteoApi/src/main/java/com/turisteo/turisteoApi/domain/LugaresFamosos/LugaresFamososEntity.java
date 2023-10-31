package com.turisteo.turisteoApi.domain.LugaresFamosos;



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
    private long id;
    private String nombre;
    private String descripcion;
    private String imagen;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "pais_id")
    private PaisEntity paisEntity;

    public LugaresFamososEntity(LugaresFamososDtoP lugaresFamososDtoP){
        this.nombre = lugaresFamososDtoP.nombre();
        this.descripcion = lugaresFamososDtoP.descripcion();
        this.imagen = lugaresFamososDtoP.imagen();
        // No necesitas buscar la entidad PaisEntity aquí
        // porque ya lo estás haciendo en tu servicio
    }

    public void actualizarLugaresFamosos(LugaresFamososDtoPut lugaresFamososDtoPut, Long paisEntity){
        this.nombre = lugaresFamososDtoPut.nombre();
        this.descripcion = lugaresFamososDtoPut.descripcion();
        this.imagen = lugaresFamososDtoPut.imagen();
        this.paisEntity = paisEntity;
    }
}
