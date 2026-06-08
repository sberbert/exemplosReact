import { useState } from "react"

function App() {

  const [cep, setCep] = useState("")
  const [endereco, setEndereco] = useState({})
  const [mensagem, setMensagem] = useState("")

  function buscarCEP() {

  if (cep.length !== 8) {
    setMensagem("O CEP deve possuir 8 dígitos")
    setEndereco({})
    return
  }

  fetch(
    `https://viacep.com.br/ws/${cep}/json/`
  )
  .then((resposta) => resposta.json())
  .then((dados) => {

    if (dados.erro) {

      setMensagem("CEP não encontrado")
      setEndereco({})

    } else {

      setMensagem("")
      setEndereco(dados)
      setCep("")

    }

  })

}

  function limpar() {

    setCep("")
    setEndereco({})

  }  

  return (
    <>
      <h1>Consulta de CEP</h1>

      <input
        type="text"
        placeholder="Digite o CEP"
        maxLength={8}
        value={cep}
        onChange={(e) => setCep(e.target.value)}
      />

      <button onClick={buscarCEP}>
        Buscar CEP
      </button>

      <button onClick={limpar}>
        Limpar
      </button>     

      <p>{mensagem}</p> 

      <hr />

      {
        endereco.logradouro &&
        (
          <div>
            <p>Cep: {endereco.cep}</p>
            <p>Rua: {endereco.logradouro}</p>
            <p>Bairro: {endereco.bairro}</p>
            <p>Cidade: {endereco.localidade}</p>
            <p>Estado: {endereco.uf}</p>
            <p>DDD: {endereco.ddd}</p>
          </div>
        )
    }      
    </>
  )
}

export default App