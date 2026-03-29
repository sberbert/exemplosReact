import { useState } from "react"
import Formulario from "./components/Formulario"
import Pedido from "./components/Pedido"
import Contador from "./components/Contador"
import Bebida from "./components/Bebida"

function App() {
  const [nome, setNome] = useState("")
  const [lanche, setLanche] = useState("")
  const [bebida, setBebida] = useState(false)
  const [quantidade, setQuantidade] = useState(0)

  return (
    <>
      <h1>🍔 Montador de Pedido</h1>

      <Formulario
        nome={nome}
        setNome={setNome}
        lanche={lanche}
        setLanche={setLanche}
      />

      <hr />

      <Contador
        quantidade={quantidade}
        setQuantidade={setQuantidade}
      />

      <Bebida
        bebida={bebida}
        setBebida={setBebida}
        quantidade={quantidade}
      />      

      <hr />

      <Pedido
        nome={nome}
        lanche={lanche}    
        quantidade={quantidade}
        bebida={bebida}
      />
    </>
  )
}

export default App