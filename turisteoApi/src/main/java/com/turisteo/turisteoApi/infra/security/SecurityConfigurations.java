package com.turisteo.turisteoApi.infra.security;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
public class SecurityConfigurations {

    @Autowired
    private SecurityFilter securityFilter;

    /*
        tipo de objeto para que implemente una autenticacion stateless
        con objeto/metodo nos referimos a un objeto public que sera el security builter chain

        En está clase le estamos indicando a Spring que nuestra clase con la anotación
        @Configuration será una clase encargada de crear beans a través de sus métodos
        marcados con la anotación @Bean.

 */

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity) throws Exception{
    
        return httpSecurity.csrf( csrf -> csrf.disable()).sessionManagement( sess ->
                sess.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .authorizeHttpRequests( auth -> auth.requestMatchers(HttpMethod.POST, "/login").permitAll()
                        .requestMatchers(HttpMethod.POST, "/signup").permitAll()
                        .requestMatchers(HttpMethod.GET, "/paises").hasRole("ADMIN")
                        .requestMatchers(HttpMethod.GET, "/vuelos").hasRole("ADMIN")
                        .anyRequest().authenticated())
                .addFilterBefore(securityFilter, UsernamePasswordAuthenticationFilter.class)
                .build();
    
}


/*
    Se ha creado este metodo de authenticationManager para que en el controlador de los usuarios
    podamos utilizar AutoWired con la clase authenticationManager que permite los procesos de autenticacion en el controller

    Usamos Bean para que este disponible en el contexto de Spring como anotacion y
    retornamos un metodo de la clase AuthenticationConfiguration
    para obtener el authentication manager en el controller
     */

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration) throws Exception{
        return authenticationConfiguration.getAuthenticationManager();
    }

        /*
    este metodo de passwordencoder es el que retorna un encriptador, en este caso bcrypt. esto lo hacemos aqui porque asi con la anotacion BEAN
    spring lo puede utilizar. Lo usamos por ejemplo en la entidad de usuarios
     */

    @Bean
    public PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }

}
