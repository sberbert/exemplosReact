import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import "../App.css"


function Contatos() {

  // Estado para armazenar os contatos recebidos
  const [contatos, setContatos] = useState([])

  // useEffect para buscar os contatos quando o componente é montado
  useEffect(() => {
    fetch("http://localhost:8080/contato.php")  
      .then((resposta) => resposta.json())
      .then((dados) => {
        setContatos(dados)
      })
      .catch(() => {
        console.log("Erro ao buscar os contatos.")
      })
  }, [])

  function excluirContato(id) {

    if (confirm("Deseja realmente excluir este contato?")) {

      fetch(`http://localhost:8080/contato.php?id=${id}`, {
        method: "DELETE"
      })
        .then(resposta => resposta.json())
        .then(dados => {
          console.log(dados.mensagem)

          // Atualiza a lista de contatos removendo o contato excluído  
          setContatos(contatos.filter(contato => contato.id !== id))  
        })
        .catch(() => {
          console.log("Erro ao excluir o contato.")
        })
    }
}

  return (
    <>
      <h1>📩 Mensagens recebidas</h1>

      {contatos.length === 0 ? ( <p>Nenhuma mensagem cadastrada.</p> ) : (
        contatos.map((contato) => (
          // Renderiza cada contato em um card
          <div key={contato.id}>
            <h3>{contato.nome}</h3>
            <p><b>E-mail:</b> {contato.email}</p>
            <p><b>Assunto:</b> {contato.assunto}</p>
            <p><b>Mensagem:</b> {contato.mensagem}</p>
            <p><b>Data:</b> {contato.data_envio}</p>
            
            <Link  className="botao" to={`/contato/${contato.id}`}>✍</Link> 

            <button className="botao" onClick={() => excluirContato(contato.id)}>
                ❌
            </button>            
            <hr />
          </div>
        ))
      )}
    </>
  )
}

export default Contatos;