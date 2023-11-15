package com.turisteo.turisteoApi.domain.usuarioAdmin;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

public record UsuarioAdminDtoLogin(
        @NotBlank
        @Email
        String email,
        @NotBlank
        String contrasena
) {
}
