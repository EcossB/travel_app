package com.turisteo.turisteoApi.infra.security;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTCreationException;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.turisteo.turisteoApi.domain.usuario.UsuariosEntity;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneOffset;
import java.util.Date;

@Service
public class TokenService {

    @Value("${api.security.secret}")
    private String apiSecret;

        /*
    este metodo que esta aqui es un metodo que encripta y genera un jwt de la autenticacion del usuario.

    en un try/catch lo que tenemos es lo siguiente:

        usamos la clase Algorithm de auth0 la cual tiene metodo de encriptar HMAC256 la cual tiene un secret (que es una contrasena a nivel de desarrollador la cual se envia en el jwt)

        luego retornamos un obketo del tipo string el cual utiliza la clase JWT de auth0 en la cual le mandamos issuer (quien emite el jwt, por lo general la compania)
        tambien le mandamos el claim que es el id del usuario en el token
        luego le expecificamos la cantidad de tiempo que tendra ese token para expirar.
        y por ultimo el sign el cual le pasamos la contra de desarrollador encriptada y lo introduce en el JWT

     */



    public String generateToken(UsuariosEntity usuario){
        try{
            Algorithm algorithm = Algorithm.HMAC256(apiSecret);
            return JWT.create().withIssuer("turisteo")
                    .withSubject(usuario.getEmail())
                    .withClaim("id", usuario.getId())
                    .withExpiresAt(generarFechaExpiracion())
                    .sign(algorithm);
        } catch (JWTCreationException exception){
            throw new RuntimeException();
        }
    }


        /*
        El subject es a quien esta siendo asignado el token
        .withSubject(usuario.getLogin())


    */

    public String getSubject(String token){


        if(token == null){
            throw new RuntimeException();
        }

        DecodedJWT verifier = null;

        try{
            Algorithm algorithm = Algorithm.HMAC256(apiSecret);
            verifier = JWT.require(algorithm)
                    // specify an specific claim validations
                    .withIssuer("turisteo")
                    // reusable verifier instance
                    .build()
                    .verify(token);
            verifier.getSubject();
        } catch (JWTCreationException exception){
            System.out.println("aqui es donde se jode");
            throw new RuntimeException(exception.toString());
        }
        if(verifier.getSubject() == null){
            throw new RuntimeException("verifier invalido");
        }
        return verifier.getSubject();
    }

        /*
    este metodo lo que hace es generar por asi decirlo un contador de 4 horas.
     */

    private Instant generarFechaExpiracion() {
        return LocalDateTime.now().plusHours(4).toInstant(ZoneOffset.of("-05:00"));
    }
}
