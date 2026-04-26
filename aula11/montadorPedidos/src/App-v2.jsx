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
  const [pedidos, setPedidos] = useState([])
  
  const [indiceEdicao, setIndiceEdicao] = useState(null) // Estado para armazenar o índice do pedido em edição (null quando não estiver editando)

  const qtdPedidos = pedidos.length

  function adicionarPedido() {
    if (!nome || !lanche || quantidade === 0) return 

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

  function editarPedido(index) { // Função para iniciar a edição de um pedido
    const pedido = pedidos[index]
    setNome(pedido.nome)
    setLanche(pedido.lanche)
    setQuantidade(pedido.quantidade)
    setBebida(pedido.bebida)
    setIndiceEdicao(index)
  }  

  function salvarEdicao() {
    const novaLista = pedidos.map((pedido, index) => {
      if (index === indiceEdicao) {
        return { nome, lanche, quantidade, bebida } // Retorna o pedido atualizado
      }
      return pedido
    })

    setPedidos(novaLista) // Atualiza a lista de pedidos com o pedido editado 
    setIndiceEdicao(null) // Reseta o índice de edição  


    setNome("") // Limpa o campo de nome
    setLanche("") // Limpa o campo de lanche
    setQuantidade(0) // Reseta a quantidade
    setBebida(false) // Reseta a bebida        
  } 

  function cancelarEdicao() {
    setNome("")
    setLanche("")
    setQuantidade(0)
    setBebida(false)

    setIndiceEdicao(null)
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

      {/*<button onClick={adicionarPedido}>
        👍 Adicionar Pedido
      </button>*/}

      <button onClick={indiceEdicao === null ? adicionarPedido : salvarEdicao}> 
        {indiceEdicao === null ? "👍 Adicionar" : " ✏️ Salvar"}
      </button>      

      {indiceEdicao !== null && (
        <button onClick={cancelarEdicao}>
          🚫 Cancelar Edição
        </button>
      )}

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
              aoRemover={() => removerPedido(index)}
              aoEditar={() => editarPedido(index)} // Passa a função de edição para o componente Pedido
            />
          ))}
        </>
      )}
    </>
  )
  }

export default App