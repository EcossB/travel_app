package com.turisteo.turisteoApi.domain.gastronomia;

import com.turisteo.turisteoApi.domain.paises.PaisEntity;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record GastronomiaDtoP(

          @NotBlank
          String nombrePlato,
          @NotBlank
          String linkImagen,
          @NotNull
          PaisEntity paisId
                              ) {
}
