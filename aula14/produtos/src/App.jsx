import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Produtos from './pages/Produtos'
import Sobre from './pages/Sobre'
import Servicos from './pages/Servicos'
import Contato from './pages/Contato'
import Erro404 from './pages/Erro404'

function App() {

  return (
    <>

      <nav>
        <Link to="/">Home</Link> | <Link to="/produtos">Produtos</Link> | <Link to="/sobre">Sobre</Link> | <Link to="/servicos">Serviços</Link> | <Link to="/contato">Contato</Link>
      </nav>

      <hr />
          
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/produtos" element={<Produtos />}/>
        <Route path="/sobre" element={<Sobre />}/>
        <Route path="/servicos" element={<Servicos />}/>
        <Route path="/contato" element={<Contato />}/>          
        <Route path="*" element={<Erro404 />}/>
      </Routes>

    </>
  )
}

export default App