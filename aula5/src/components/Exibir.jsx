import { useState } from 'react' //importação do hook useState

function Exibir() {
  const [mostrar, setMostrar] = useState(false) //variável de estado mostrar, função para atualizar o estado setMostrar, valor inicial false

  return (
    <>
      <button onClick={() => setMostrar(!mostrar)}>
        Mostrar / Esconder
      </button>
      {/*se mostrar for true, exibe o parágrafo, caso contrário, não exibe nada*/}    
      {mostrar && <p>Texto secreto</p>} 
    </>
  )
}

export default Exibir