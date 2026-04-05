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

  const [pedidos, setPedidos] = useState([]) // Array para armazenar os pedidos

  // Função para adicionar um novo pedido ao array de pedidos
  function adicionarPedido() {
    if (!nome || !lanche || quantidade === 0) return // verificação de campos preenchidos

      const novoPedido = { nome, lanche, quantidade, bebida }
      
      setPedidos([...pedidos, novoPedido]) // Adiciona o novo pedido ao array de pedidos  
  }
  
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

      <br /><br />

      <button onClick={adicionarPedido}>
        Adicionar Pedido
      </button>
 
      {pedidos.map((pedido, index) => (
        <Pedido
          key={index} //para identificar cada pedido de forma única (para o react e não para o componente)
          nome={pedido.nome}
          lanche={pedido.lanche}
          quantidade={pedido.quantidade}
          bebida={pedido.bebida}
        />
      ))}
    </>
  )
}

export default App