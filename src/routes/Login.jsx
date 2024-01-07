import { useState } from "react"

const Login = () => {

    const [nombre, setNombre] = useState("")
    const [contraseña, setContraseña] = useState("")

    const handleSubmit = e => {
        e.preventDefault()
        alert("Iniciaste sesion");
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <input
                type='text'
                placeholder='Ingresar Nombre'
                value={nombre}
                onChange={e =>setNombre(e.target.value)}
            />

            <input
                type='text'
                placeholder='Ingresar Email'
                value={contraseña}
                onChange={e =>setContraseña(e.target.value)}
            />
        
            <input
                type="submit"
                value="Enviar datos"
            />
        </form>
    )
}

export default Login