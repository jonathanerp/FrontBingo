import { useState } from "react"

const Registro = () => {

    const [nombre, setNombre] = useState("")
    const [contraseña, setContraseña] = useState("")

    const handleSubmit = e => {
        e.preventDefault()
        alert("Informacion guardada");
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Registro</h1>
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

export default Registro