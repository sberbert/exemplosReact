import './App.css'
import Contador from './components/Contador'
import Mensagem from './components/Mensagem'
import Exibir from './components/Exibir'


function App() {
  
  return (
    <>
      <h1>Aula 5 - useState</h1>
      <Contador />     
      <hr />
      <Mensagem />
      <hr />
      <Exibir />
    </>
  )
}

export default App