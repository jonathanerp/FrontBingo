import { useState } from "react"

const Login = () => {

    const [nombre, setNombre] = useState("")

    return (
        <form>
            <h1>Registro</h1>
            <input
                type='text'
                placeholder='Ingresar Nombre'
                value={nombre}
                onChange={e =>setNombre(e.target.value)}
            />
        </form>
    )
}

export default Login