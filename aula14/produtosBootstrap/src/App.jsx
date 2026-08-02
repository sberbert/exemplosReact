import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Produtos from './pages/Produtos'
import Sobre from './pages/Sobre'
import Servicos from './pages/Servicos'
import Contato from './pages/Contato'
import Erro404 from './pages/Erro404'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {

  return (
    <>

      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><img src="/favicon.png" alt="Logo" /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/produtos" className="nav-link">Produtos</Link>
              </li>
              <li className="nav-item">
                <Link to="/sobre" className="nav-link">Sobre</Link>
              </li>
              <li className="nav-item">
                <Link to="/servicos" className="nav-link">Serviços</Link>
              </li>
              <li className="nav-item">
                <Link to="/contato" className="nav-link">Contato</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>    

      <div className="container-fluid">          
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/produtos" element={<Produtos />}/>
        <Route path="/sobre" element={<Sobre />}/>
        <Route path="/servicos" element={<Servicos />}/>
        <Route path="/contato" element={<Contato />}/>          
        <Route path="*" element={<Erro404 />}/>
      </Routes>
      </div>

    </>
  )
}

export default App