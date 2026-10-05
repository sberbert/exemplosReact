import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import "../App.css"


function Contatos() {

  // Estado para armazenar os contatos recebidos
  const [contatos, setContatos] = useState([])

  // useEffect para buscar os contatos quando o componente é montado
  useEffect(() => {
    buscarContatos()
  }, [])

  function buscarContatos() { //nova funcao para uso qd edita

  fetch("http://localhost:8080/contato.php")
    .then(resposta => resposta.json())
    .then(dados => {
      setContatos(dados)
    })
    .catch(() => {
      console.log("Erro ao buscar os contatos.")
    })
}

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

function alterarStatus(id, status) {
  fetch("http://localhost:8080/contato.php", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      id: id,
      status: status
    })
  })
    .then(resposta => resposta.json())
    .then(dados => {
      console.log(dados.mensagem)
      buscarContatos()
    })
    .catch(erro => {
      console.log("Erro ao alterar o status.")
      console.log(erro)
    })
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
            <p><b>Status:</b> {contato.status}</p>
            
            <button className="botao" onClick={() => alterarStatus(contato.id, "Lida")}>
               👁‍🗨 Marcar como lida
            </button>

            {" "}

            <button className="botao" onClick={() => alterarStatus(contato.id, "Resolvida")}> 
              🆗 Marcar como resolvida
            </button>

            {" "}            
 
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