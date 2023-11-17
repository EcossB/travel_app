package com.turisteo.turisteoApi.infra.security;

import com.turisteo.turisteoApi.domain.usuario.UsuariosRepository;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@Component
public class SecurityFilter extends OncePerRequestFilter {

    @Autowired
    private TokenService tokenService;

    @Autowired
    private UsuariosRepository usuariosRepository;


    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {

        System.out.println("el filtro esta funcionando");

        var authHeader = request.getHeader("Authorization");
        if(authHeader != null){
            var token = authHeader.replace("Bearer ", ""); // el problema de no reconocer el token estaba en el Bearer.
            var subject = tokenService.getSubject(token);
            if(subject != null){
                var usuario = usuariosRepository.findByEmail(subject);
               // var admin = adminRepository.findByEmail(subject);
                var authentication = new UsernamePasswordAuthenticationToken(usuario, null, usuario.getAuthorities());
               // var authenticationAdmin = new UsernamePasswordAuthenticationToken(admin, null, admin.getAuthorities());
                SecurityContextHolder.getContext().setAuthentication(authentication);
              //  SecurityContextHolder.getContext().setAuthentication(authenticationAdmin);
            }
        }
        filterChain.doFilter(request,response);
    }
}
