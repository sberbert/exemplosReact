import { useState } from "react"

function Contato() {

  // Estado para armazenar os dados do formulário
  const [formulario, setFormulario] = useState({
    nome: "",
    email: "",
    assunto: "",
    mensagem: ""
  })

  // Estado para armazenar os dados enviados
  const [dadosEnviados, setDadosEnviados] = useState(null)

  // Função para alterar os campos do formulário
  function alterarCampo(e) {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value
    })
  }

  // Função para enviar o formulário
  function enviarFormulario(e) {
    e.preventDefault()
    setDadosEnviados(formulario)
    setFormulario({
      nome: "",
      email: "",
      assunto: "",
      mensagem: ""
    })
  }

  return (
    <>
      <h1>📧Entre em contato</h1>

      <form onSubmit={enviarFormulario}>

        <div>
          <label>Nome:</label>
          <br />

          <input
            type="text"
            name="nome"
            value={formulario.nome}
            onChange={alterarCampo}
            required
          />
        </div>

        <br />

        <div>
          <label>E-mail:</label>
          <br />

          <input
            type="email"
            name="email"
            value={formulario.email}
            onChange={alterarCampo}
            required
          />
        </div>

        <br />

        <div>
          <label>Assunto:</label>
          <br />

          <input
            type="text"
            name="assunto"
            value={formulario.assunto}
            onChange={alterarCampo}
            required
          />
        </div>

        <br />

        <div>
          <label>Mensagem:</label>
          <br />

          <textarea
            name="mensagem"
            value={formulario.mensagem}
            onChange={alterarCampo}
            rows="5"
            required
          />
        </div>

        <br />

        <button type="submit">
          Enviar
        </button>

      </form>

      {dadosEnviados && (
        <>
          <hr />

          <h2>Dados enviados com sucesso!</h2>

          <p>
            <b>Nome:</b> {dadosEnviados.nome}
          </p>

          <p>
            <b>E-mail:</b> {dadosEnviados.email}
          </p>

          <p>
            <b>Assunto:</b> {dadosEnviados.assunto}
          </p>

          <p>
            <b>Mensagem:</b> {dadosEnviados.mensagem}
          </p>
        </>
      )}

    </>
  )
}

export default Contato