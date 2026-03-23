import { useState } from 'react'
import './App.css'

function App() {
  const [nome, setNome] = useState("")
  const [lanche, setLanche] = useState("")
  const [bebida, setBebida] = useState(false)

  return (
    <>
      <h1>Montador de Pedido</h1>
      
      <input 
        type="text" 
        placeholder="Seu nome" 
        value={nome} //O valor do input vem do estado (value) e muda com o onChange
        onChange={(e) => setNome(e.target.value)}
      />    

      <br />
  
      <select value={lanche} onChange={(e) => setLanche(e.target.value)}>
      <option>Escolha um lanche</option>
      <option>X-Burguer</option>
      <option>X-Salada</option>
      <option>Hot Dog</option>
    </select>

    <br />

    Quer bebida? <input type="checkbox" onChange={(e) => setBebida(e.target.checked)}/>    

    <hr />
    
    <p>Pedido de {nome}:</p>
    {lanche}
    <br />
    {bebida && "Bebida incluída"}
    </>
  )
}

export default App