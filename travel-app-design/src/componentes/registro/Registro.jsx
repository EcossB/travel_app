export const Registro = () => {
  const containerStyle = {
    backgroundColor: '#4444440',
    fontFamily: 'Be Vietnam Pro, sans-serif',
    margin: 0,
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', // Esto ajustará la altura para centrar verticalmente
    marginTop: '6rem', // Agregamos margen superior
  };

  const videoStyle = {
    position: 'fixed',
    right: 0,
    bottom: 0,
    minWidth: '100%',
    minHeight: '100%',
    zIndex: -1,
    opacity: '75%',
  };

  const headerStyle = {
    textAlign: 'left', // Cambiamos la alineación a la izquierda
    padding: '20px',
    display: 'flex', // Agregamos esto para centrar el contenido horizontalmente
    justifyContent: 'flex-start', // Alineamos a la izquierda
    alignItems: 'center', // Centra verticalmente
  };

  const imgStyle = {
    maxWidth: '250px', // Ajustamos el ancho máximo
  };

  const containerInnerStyle = {
    color: 'white',
    textAlign: 'center',
    margin: '50px auto',
  };

  const h1Style = {
    fontSize: '48px',
    fontStyle: 'normal',
    fontWeight: 700,
    lineHeight: 'normal',
  };

  const buttonsContainerStyle = {
    marginTop: '60px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Centra horizontalmente
  };

  const registerButtonStyle = {
    backgroundColor: 'white',
    borderRadius: '22px',
    color: 'rgba(60, 60, 67, 0.30)',
    fontFamily: 'Be Vietnam Pro, sans-serif',
    fontSize: '18px',
    fontWeight: 700,
    height: '66px',
    padding: '23px 38px',
    border: '1px solid rgba(60, 60, 67, 0.30)',
    width: '70%',
    marginBottom: '20px',
    textAlign: 'center', // Alinea el texto al centro
  };

  const saveButtonStyle = {
    backgroundColor: '#A96947',
    borderRadius: '22px',
    color: 'white',
    fontFamily: 'Be Vietnam Pro, sans-serif',
    fontSize: '16px',
    fontWeight: 700,
    height: '40px',
    padding: '10px 60px',
    marginTop: '1rem',
    marginBottom: '2rem', // Añadimos margen inferior
    cursor: 'pointer',
  };

  return (
    <div style={containerStyle}>
      <video autoPlay muted loop id="video-background" style={videoStyle}>
        <source src="vid.mp4" type="video/mp4" />
        Tu navegador no soporta el elemento de video.
      </video>
      <header style={headerStyle}>
        <h1>Solaria</h1>
      </header>
      <div style={containerInnerStyle}>
        <h1 style={h1Style}>
          ¿Listo para empezar la aventura?
          <br />
          ¡Regístrate!
        </h1>
        <div style={buttonsContainerStyle}>
          <button style={registerButtonStyle}>Nombre</button>
          <button style={registerButtonStyle}>Apellido</button>
          <button style={registerButtonStyle}>Email</button>
          <button style={registerButtonStyle}>Contraseña</button>
          <button style={registerButtonStyle}>Confirmar contraseña</button>
        </div>
        <button style={saveButtonStyle}>Guardar</button>
      </div>
    </div>
  );
}

