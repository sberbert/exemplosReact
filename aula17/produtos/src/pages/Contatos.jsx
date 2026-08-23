import { useEffect, useState } from "react"

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
            <hr />
          </div>
        ))
      )}
    </>
  )
}

export default Contatos;