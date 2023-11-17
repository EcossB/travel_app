package com.turisteo.turisteoApi.controller;


import com.turisteo.turisteoApi.domain.usuario.UsuarioDtoLogin;
import com.turisteo.turisteoApi.domain.usuario.UsuariosEntity;
import com.turisteo.turisteoApi.infra.security.DatosJWTtoken;
import com.turisteo.turisteoApi.infra.security.TokenService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/login")
public class AutenticacionController {

    @Autowired
    private AuthenticationManager manager;

    @Autowired
    private TokenService tokenService;

    @PostMapping
    public ResponseEntity autenticarusuario(@RequestBody @Valid UsuarioDtoLogin usuarioDtoLogin){

        Authentication authToken = new UsernamePasswordAuthenticationToken(usuarioDtoLogin.email(),
                usuarioDtoLogin.clave());
        var usuarioAutenticado = manager.authenticate(authToken);
        var jwtToken = tokenService.generateToken((UsuariosEntity) usuarioAutenticado.getPrincipal());
        return ResponseEntity.ok(new DatosJWTtoken("Autenticacion Correcta ",jwtToken));
    }

}
