import { useState } from 'react'
import './App.css'

function App() {
  const [nome, setNome] = useState("")
  const [lanche, setLanche] = useState("")

  return (
    <>

      <h1>Montador de Pedido</h1>
      
      <input 
        type="text" 
        placeholder="Seu nome" 
        value={nome} //O valor do input vem do estado (value) e muda com o onChange
        onChange={(e) => setNome(e.target.value)}
      />    
  
      <select value={lanche} onChange={(e) => setLanche(e.target.value)}>
      <option>Escolha um lanche</option>
      <option>X-Burguer</option>
      <option>X-Salada</option>
      <option>Hot Dog</option>
    </select>

    <p>Pedido de {nome}: {lanche}</p>    
    </>
  )
}

export default App