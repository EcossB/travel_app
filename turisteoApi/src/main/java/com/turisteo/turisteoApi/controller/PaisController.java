package com.turisteo.turisteoApi.controller;

import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import com.turisteo.turisteoApi.domain.paises.*;
import jakarta.transaction.Transactional;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;
import java.util.Optional;

@RestController
@RequestMapping("/paises")
@SecurityRequirement(name = "bearer-key")
public class PaisController {

    @Autowired
    private PaisRepository paisRepository;

    /*
    Metodo Post
    Debe retornar un 201(created) al frontend y tambien la direcion URL donde se guardo
    ademas debe validar usando @Valid
     */


    @PostMapping
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<PaisDtoG> guardarPais(@RequestBody @Valid PaisDtoP paisDtoP , UriComponentsBuilder builder){
        System.out.println("El post fue correcto");

        PaisEntity pais = paisRepository.save(new PaisEntity(paisDtoP)); // usamos el repository para guardar los datos que vienen

        PaisDtoG paisDtoG = new PaisDtoG(pais.getPais_id(),
                pais.getNombre(), pais.getDescripcion(),
                pais.getContinente(), pais.getBandera(),
                pais.getImagen1(), pais.getImagen2());

        URI url = builder.path("/paises/{id}").buildAndExpand(pais.getPais_id()).toUri();

        return ResponseEntity.created(url).body(paisDtoG);
    }

    @GetMapping
    public ResponseEntity<Page<PaisDtoG>> listadoPaises(@PageableDefault(size = 10)Pageable pageable){

        return ResponseEntity.ok(paisRepository.findAll(pageable).map(PaisDtoG::new));
    }

    @PutMapping
    @Transactional
    public ResponseEntity actualizarPais(@RequestBody @Valid PaisDtoPut actualizarPais){

        PaisEntity pais = paisRepository.getReferenceById(actualizarPais.id());
        pais.actualizarPais(actualizarPais);
        return ResponseEntity.ok(new PaisDtoG(pais.getPais_id(),
                pais.getNombre(), pais.getDescripcion(),
                pais.getContinente(), pais.getBandera(),
                pais.getImagen1(), pais.getImagen2()));
    }

    @DeleteMapping("/{id}")
    @Transactional
    public ResponseEntity eliminarPais(@PathVariable Long id){
        Optional<PaisEntity> optionalPais = paisRepository.findById(id);

        if (optionalPais.isEmpty()){
            return ResponseEntity.notFound().build();
        }

        paisRepository.deleteById(id);
        System.out.println("Usuario eliminado Correctamente");

        return ResponseEntity.noContent().build();
    }


    @GetMapping("/{nombre}")
    public ResponseEntity ObtenerPaisPorNombre(@PathVariable String nombre, @PageableDefault(size = 10) Pageable page){

        PaisEntity pais = paisRepository.findByNombre(nombre);

        return ResponseEntity.ok(pais);
    }


}
