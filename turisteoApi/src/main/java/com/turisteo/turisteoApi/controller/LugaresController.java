package com.turisteo.turisteoApi.controller;

import com.turisteo.turisteoApi.domain.LugaresFamosos.*;
import com.turisteo.turisteoApi.domain.paises.PaisEntity;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;
import java.util.Optional;
@RestController
@RequestMapping("/lugaresfamosos")
public class LugaresController {

    @Autowired
    private LugaresRepository lugaresRepository;
    @PostMapping
    public ResponseEntity<LugaresFamososDtoG> guardarlugarfamoso(@RequestBody @Valid LugaresFamososDtoP lugaresFamososDtoP , UriComponentsBuilder builder){
        System.out.println("El post fue correcto");

        LugaresFamososEntity lugaresFamosos = lugaresRepository.save(new LugaresFamososEntity(lugaresFamososDtoP));

        LugaresFamososDtoG lugaresFamososDtoG = new LugaresFamososDtoG(lugaresFamosos.getId(),
                lugaresFamosos.getNombre(), lugaresFamosos.getDescripcion(), lugaresFamosos.getImagen(), lugaresFamosos.getPaisEntity());

        URI url = builder.path("/lugaresfamosos/{id}").buildAndExpand(lugaresFamosos.getId()).toUri();

        return ResponseEntity.created(url).body(lugaresFamososDtoG);
    }
    @GetMapping
    public ResponseEntity<Page<LugaresFamososDtoG>> listadeLugaresFamosos(@PageableDefault(size = 10)Pageable pageable){

        return ResponseEntity.ok(lugaresRepository.findAll(pageable).map(LugaresFamososDtoG::new));
    }
    @PutMapping
    @Transactional
    public ResponseEntity actualizarLugaresFamosos(@RequestBody @Valid LugaresFamososDtoPut actualizarLugaresFamosos){

        LugaresFamososEntity lugaresFamosos = lugaresRepository.getReferenceById(actualizarLugaresFamosos.id());
        lugaresFamosos.actualizarLugaresFamosos(actualizarLugaresFamosos);

        return ResponseEntity.ok(new LugaresFamososDtoG(lugaresFamosos.getId(),
                lugaresFamosos.getNombre(), lugaresFamosos.getDescripcion(), lugaresFamosos.getImagen(), lugaresFamosos.getPaisEntity()));
    }
    @DeleteMapping("/{id}")
    @Transactional
    public ResponseEntity eliminarLugarFamosos(@PathVariable Long id){
        Optional<LugaresFamososEntity> optionalLugaresFamosos = lugaresRepository.findById(id);

        if (optionalLugaresFamosos.isEmpty()){
            return ResponseEntity.notFound().build();
        }
        lugaresRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
