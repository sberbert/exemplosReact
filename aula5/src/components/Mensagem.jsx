import { useState } from 'react' //importação do hook useState

function Mensagem() {
    const [texto, setTexto] = useState("Olá") //variável de estado texto, função para atualizar o estado setTexto, valor inicial "Olá"

    function mudar() {
        setTexto("Bem-vindos à aula!")
    }

    return (
    <>
        <p>{texto}</p>
        <button onClick={mudar}>Mudar texto</button>
    </>
    )
}

export default Mensagem