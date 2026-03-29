import { useState } from "react"

function Login() {
    const [logado, setLogado] = useState(false)
    return (
        <>
        <button onClick={() => setLogado(!logado)}>
        Alternar Login
        </button>
        <h2>{logado ? "Bem-vindo!" : "Faça login"}</h2>
        </>
    )
}
export default Login