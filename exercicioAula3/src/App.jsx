import CartaoAluno from './components/CartaoAluno'
import './App.css'

function App() {
  return (
    <>
      <h1>Lista de Alunos</h1>
      <hr />

      <CartaoAluno nome="Ana Maria Silva" curso="DS" />
      <CartaoAluno nome="Carlos Henrique Costa" curso="ED" />
      <CartaoAluno nome="Maria Eduarda Santos" curso="MEC" />
    </>
  )
}

export default App