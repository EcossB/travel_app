import "./loginStyle.css"

export const InputLogin = () => {
  return (
    <>
    <input 
        type="text" 
        placeholder="Nombre"
    />
    <input type="password" 
        placeholder="Contraseña"
    />
    <p className="passwd-p">¿Olvidaste tu contraseña?</p>
    </>
  )
}
