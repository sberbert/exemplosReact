import './App.css'
import { useState } from 'react'
import Fruta from './components/Frutas'

function App() {
  //const frutas = ["Maçã", "Banana", "Uva"]

  /*const frutas = [
    { nome: "Maçã" },
    { nome: "Banana" },
    { nome: "Uva" }
  ]  */  

  const [frutas, setFrutas] = useState([
    { nome: "Maçã" },
    { nome: "Banana" },
    { nome: "Uva" }
  ]) // Estado para armazenar a lista de frutas

  const [novaFruta, setNovaFruta] = useState("") // Estado para armazenar o valor da nova fruta a ser adicionada

  function adicionarFruta() {
    if (novaFruta === "") return

    const novaLista = [
      ...frutas, 
      { nome: novaFruta } 
    ] // Cria uma nova lista de frutas, adicionando a nova fruta ao final da lista existente

    setFrutas(novaLista)
    setNovaFruta("") // Limpa o campo de entrada após adicionar a tarefa
  } 

  return (
    <>
      <h1>Frutas</h1>
      
      {frutas.map((fruta, index) => (
      <Fruta key={index} nome={fruta.nome} />
      ))}

      <hr />

     <input
        type="text"
        value={novaFruta} // O valor do campo de entrada é controlado pelo estado novaTarefa
        onChange={(e) => setNovaFruta(e.target.value)} // Atualiza o estado novaTarefa conforme o usuário digita no campo de entrada
        placeholder="Digite uma fruta"
      />

      <button onClick={adicionarFruta}>
        Adicionar
      </button>      
    </>
  )
}

export default App