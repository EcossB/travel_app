package com.turisteo.turisteoApi.Service;

import com.turisteo.turisteoApi.domain.LugaresFamosos.LugaresFamososDtoPut;
import com.turisteo.turisteoApi.domain.LugaresFamosos.LugaresFamososEntity;
import com.turisteo.turisteoApi.domain.LugaresFamosos.LugaresRepository;
import com.turisteo.turisteoApi.domain.paises.PaisEntity;
import com.turisteo.turisteoApi.domain.paises.PaisRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LugaresFamososService {
    @Autowired
    private LugaresRepository lugaresRepository;

    @Autowired
    private PaisRepository paisRepository;

    @Transactional
    public void actualizarLugaresFamosos(LugaresFamososDtoPut lugaresFamososDtoPut){
        LugaresFamososEntity lugaresFamosos = lugaresRepository.getReferenceById(lugaresFamososDtoPut.id());

        // Buscar la entidad PaisEntity correspondiente al ID proporcionado
        PaisEntity paisEntity = paisRepository.findById(lugaresFamososDtoPut.paisId()).orElse(null);

        lugaresFamosos.actualizarLugaresFamosos(lugaresFamososDtoPut, paisEntity); // Pasar ambos argumentos

        lugaresRepository.save(lugaresFamosos);
    }
}
