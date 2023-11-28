// Hook para almacenar el token y utilizarlo en los diferentes escenarios
import { useState, useEffect } from 'react';

const useAuthToken = () => {
  const [token, setToken] = useState(null);

  useEffect(() => {

    const storedToken = localStorage.getItem('authToken');
    if (storedToken) {
      setToken(storedToken);
    }
  }, []); // Solo se ejecuta en el montaje

  return token;
};

export default useAuthToken;
