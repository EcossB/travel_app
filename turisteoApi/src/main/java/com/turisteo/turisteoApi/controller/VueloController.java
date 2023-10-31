package com.turisteo.turisteoApi.controller;


import com.turisteo.turisteoApi.domain.vuelos.*;
import jakarta.transaction.Transactional;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;

@RestController
@RequestMapping("/vuelos")
public class VueloController {

    @Autowired
    private VuelosRepository vuelosRepository;

    @PostMapping
    public ResponseEntity<?> guardarVuelos(@RequestBody @Valid VuelosDtoP vuelosDtoP, UriComponentsBuilder builder){
        VuelosEntity vuelos = vuelosRepository.save(new VuelosEntity(vuelosDtoP));

        //rellenando el dto que sera mandando al cliente luego de crear el objeto
        VuelosDtoG vuelosDtoG = new VuelosDtoG(vuelos.getId(), vuelos.getLink_vuelos(), vuelos.getPaisEntity());

        //creacion del url

        URI url = builder.path("/vuelos/{id}").buildAndExpand(vuelos.getId()).toUri();

        //mandando el url a traves de la repuesta modificada gracias el responseEntity

        return ResponseEntity.created(url).body(vuelosDtoG);

    }

    @GetMapping
    public ResponseEntity<Page<VuelosDtoG>> listadoVuelos(@PageableDefault(size = 10) Pageable pageable) {

        //mandando respuesta modificada con response Entity
        return ResponseEntity.ok(vuelosRepository.findAll(pageable).map(VuelosDtoG::new));
    }

    @PutMapping
    @Transactional
    public ResponseEntity<?> actualizarVuelos(@RequestBody @Valid VuelosDtoPut vuelosDtoPut){

        VuelosEntity vuelos = vuelosRepository.getReferenceById(vuelosDtoPut.id());
        vuelos.actualizarVuelos(vuelosDtoPut);
        return ResponseEntity.ok(new VuelosDtoG(
                vuelos.getId(),
                vuelos.getLink_vuelos(),
                vuelos.getPaisEntity()));

    }


    @DeleteMapping("/{id}")
    @Transactional
    public ResponseEntity<?> eliminarVuelos(@PathVariable Long id){
        VuelosEntity vuelos = vuelosRepository.getReferenceById(id);

        vuelosRepository.delete(vuelos);
        return ResponseEntity.noContent().build();
    }



}
