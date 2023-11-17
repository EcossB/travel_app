package com.turisteo.turisteoApi.infra.security;


import com.turisteo.turisteoApi.domain.usuario.UsuariosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

/*
esta clase es la que va a tener la logica de autenticacion de la app
con la anotacion Service spring escanea esta clase como un servicio

Esta clase implementa el UserDetailService, una interfaz propia de spring para efectuar su login.
 */

@Service
public class AutenticacionService implements UserDetailsService {

    @Autowired
    private UsuariosRepository usuariosRepository;


    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return usuariosRepository.findByEmail(username);
    }
}
