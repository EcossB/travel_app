package com.turisteo.turisteoApi.controller;

import com.turisteo.turisteoApi.domain.usuario.UsuarioDtoLogin;
import com.turisteo.turisteoApi.domain.usuario.UsuarioSignUpDto;
import com.turisteo.turisteoApi.domain.usuario.UsuariosEntity;
import com.turisteo.turisteoApi.domain.usuario.UsuariosRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;

@RestController
@RequestMapping("/signup")
public class SignUpController {

    @Autowired
    private UsuariosRepository usuariosRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping
    public ResponseEntity<UsuarioSignUpDto>guardarUsuario(@RequestBody @Valid UsuarioSignUpDto usuarioSignUpDto, UriComponentsBuilder builder){


        UsuariosEntity usuarios = usuariosRepository.save(new UsuariosEntity(usuarioSignUpDto.nombre(),
                usuarioSignUpDto.apellido(),
                usuarioSignUpDto.email(),
                passwordEncoder.encode(usuarioSignUpDto.contrasena())));

        UsuarioSignUpDto usuarioSignUpDtoR = new UsuarioSignUpDto(usuarios.getNombre(), usuarios.getApellido(), usuarios.getEmail(), usuarios.getContrasena());

        URI url = builder.path("/signup/{id}").buildAndExpand(usuarios.getId()).toUri();

        return ResponseEntity.created(url).body(usuarioSignUpDtoR);


    }

}
