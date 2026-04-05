import { useState } from "react"
import Formulario from "./components/Formulario"
import Pedido from "./components/Pedido-v2"
import Contador from "./components/Contador"
import Bebida from "./components/Bebida"

function App() {
  const [nome, setNome] = useState("")
  const [lanche, setLanche] = useState("")
  const [bebida, setBebida] = useState(false)
  const [quantidade, setQuantidade] = useState(0)

  const [pedidos, setPedidos] = useState([]) // Array para armazenar os pedidos

  const qtdPedidos = pedidos.length

  // Função para adicionar um novo pedido ao array de pedidos
  function adicionarPedido() {
    if (!nome || !lanche || quantidade === 0) return // verificação de campos preenchidos

      const novoPedido = { nome, lanche, quantidade, bebida }
      
      setPedidos([...pedidos, novoPedido]) // Adiciona o novo pedido ao array de pedidos  
      
      setNome("") // Limpa o campo de nome
      setLanche("") // Limpa o campo de lanche
      setQuantidade(0) // Reseta a quantidade
      setBebida(false) // Reseta a bebida
  }

  function removerPedido(indiceRemover) {
    // Cria uma nova lista sem o pedido a ser removido
    const novaLista = pedidos.filter((item, index) => index !== indiceRemover) 
    setPedidos(novaLista)
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
        👍 Adicionar Pedido
      </button>

      {qtdPedidos === 0 && <p><small>Não há pedidos ainda.</small></p>}

      {qtdPedidos > 0 && (
        <>
          <p><small>Há {qtdPedidos} pedido(s).</small></p>

          {pedidos.map((pedido, index) => (
            <Pedido
              key={index}
              nome={pedido.nome}
              lanche={pedido.lanche}
              quantidade={pedido.quantidade}
              bebida={pedido.bebida}
              aoRemover={() => removerPedido(index)} // Passa a função de remoção para o componente Pedido
            />
          ))}
        </>
      )}
    </>
  )
}

export default App