// En un archivo llamado usePaisId.js
import { useState } from 'react';

const usePaisId = () => {
  const [paisId, setPaisId] = useState(() => {
    // Intenta obtener el ID del país almacenado en localStorage
    const storedPaisId = localStorage.getItem('paisId');
    return storedPaisId ? JSON.parse(storedPaisId) : null;
  });

  const savePaisId = (newId) => {
    setPaisId(newId);
    // Almacena el nuevo ID del país en localStorage
    localStorage.setItem('paisId', JSON.stringify(newId));
  };

  return { paisId, savePaisId };
};

export default usePaisId;
