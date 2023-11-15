package com.turisteo.turisteoApi.domain.usuarioAdmin;

import org.springframework.data.jpa.repository.JpaRepository;

public interface AdminRepository extends JpaRepository<Long,UsuarioAdminEntity> {
}
