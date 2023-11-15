package com.turisteo.turisteoApi.domain.usuario;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

public record UsuarioDtoLogin(
        @NotBlank
        @Email
        String email,
        @NotBlank
        String clave
) {

}
