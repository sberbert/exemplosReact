import { useState } from "react"

function App() {

  // Variáveis de estado para armazenar os valores dos campos
  const [nome, setNome] = useState("")
  const [preco, setPreco] = useState("")
  const [quantidade, setQuantidade] = useState("")
  const [mensagem, setMensagem] = useState("")

  function cadastrarProduto() {

    console.log("Botão clicado!")
      
    // Criar um objeto FormData para enviar os dados do formulário
    const dados = new FormData()
    dados.append("nome", nome)
    dados.append("preco", preco)
    dados.append("quantidade", quantidade) 

    //precisa startar o servidor PHP na pasta backend
    fetch("http://localhost:8000/salvarProduto.php", {
      method: "POST",
      body: dados
    })
    .then((resposta) => resposta.text())
    .then((dados) => {
      //console.log(dados)
      setMensagem(dados)
    })
    .catch((erro) => {
      //console.log(dados)
      setMensagem(dados)
    })
  }

  return (
    <>
      <h1>Cadastro de Produtos</h1>

      <input 
        type="text"
        placeholder="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <br/><br/>

      <input
        type="number"
        placeholder="Preço"
        value={preco}
        onChange={(e) => setPreco(e.target.value)}
      />
      <br/><br/>

      <input
        type="number"
        placeholder="Quantidade"
        value={quantidade}
        onChange={(e) => setQuantidade(e.target.value)}
      />
      <br/><br/>

      <button onClick={cadastrarProduto}>Cadastrar</button>    

      <p>{mensagem}</p>
    </>
  )
}
export default App