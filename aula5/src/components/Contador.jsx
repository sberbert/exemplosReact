import { useState } from 'react' //importação do hook useState

function Contador() {
 const [numero, setNumero] = useState(0) //variável de estado numero, função para atualizar o estado setNumero, valor inicial 0

 function aumentar() {
    setNumero(numero + 1)
 }

 return (
 <>
    <h2>{numero}</h2>
    <button onClick={aumentar}>Aumentar</button>
 </>
 )
}

export default Contador