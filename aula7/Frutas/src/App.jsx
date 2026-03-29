import './App.css'
import Fruta from './components/Frutas'

function App() {
  //const frutas = ["Maçã", "Banana", "Uva"]

  const frutas = [
    { nome: "Maçã" },
    { nome: "Banana" },
    { nome: "Uva" }
  ]  

  return (
    <>
      <h1>Frutas</h1>
      
      {frutas.map((fruta, index) => (
      <Fruta key={index} nome={fruta.nome} />
      ))}

     </>
  )
}

export default App
