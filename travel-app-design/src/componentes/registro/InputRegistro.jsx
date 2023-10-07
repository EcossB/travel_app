import "./registroStyle.css"

export const InputRegistro = () => {
  return (
    <>
    <input 
        type="text" 
        placeholder="Nombre"
    />
    <input type="text" 
        placeholder="Apellido"
    />
    <input type="email" 
        placeholder="Email"
    />
    <input type="password" 
        placeholder="Contraseña"
    />
    <input type="password" 
        placeholder="Confirmar contraseña"
    />
    </>

  )
}
