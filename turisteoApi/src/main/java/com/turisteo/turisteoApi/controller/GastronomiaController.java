package com.turisteo.turisteoApi.controller;

import com.turisteo.turisteoApi.domain.gastronomia.*;
import jakarta.transaction.Transactional;
import jakarta.validation.Valid;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;

@RestController
@RequestMapping("/gastronomia")
public class GastronomiaController {

    @Autowired
    private GastronomiaRepository gastronomiaRepository;

    @PostMapping
    public ResponseEntity<?> guardarGastronomia(@RequestBody @Valid GastronomiaDtoP datosGastronomia, UriComponentsBuilder builder){
        GastronomiaEntity gastronomia = gastronomiaRepository.save(new GastronomiaEntity(datosGastronomia));

        GastronomiaDtoG gastronomiaDtoG = new GastronomiaDtoG(gastronomia.getId(), gastronomia.getNombre_plato(),
        gastronomia.getImagen(),
        gastronomia.getPaisEntity());

        URI url = builder.path("/gastronomia/{id}").buildAndExpand(gastronomia.getId()).toUri();

        return ResponseEntity.created(url).body(gastronomiaDtoG);
    }

    @GetMapping
    public ResponseEntity<?> listarGastronomia(@PageableDefault(size = 10) Pageable pageable) {
        return ResponseEntity.ok(gastronomiaRepository.findAll(pageable).map(GastronomiaDtoG::new));
    }

    @PutMapping
    @Transactional
    public ResponseEntity<?> actualizarGastronomia(@RequestBody @Valid GastronomiaDtoPut datosActualizarGastronomia){
        GastronomiaEntity gastronomia = gastronomiaRepository.getReferenceById(datosActualizarGastronomia.id());
        gastronomia.actualizarDatos(datosActualizarGastronomia);

        GastronomiaDtoG gastronomiaDtoG = new GastronomiaDtoG(gastronomia.getId(), gastronomia.getNombre_plato(),
                gastronomia.getImagen(),
                gastronomia.getPaisEntity());

        return ResponseEntity.ok(gastronomiaDtoG);
    }

    @DeleteMapping("/{id}")
    @Transactional
    public ResponseEntity<?> eliminarGastronomia(@PathVariable Long id){
        GastronomiaEntity gastronomia = gastronomiaRepository.getReferenceById(id);

        gastronomiaRepository.delete(gastronomia);

        return ResponseEntity.noContent().build();
    }


}
