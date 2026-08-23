import { useEffect, useState } from "react";

function Contato() {

  // Estado para armazenar os dados do formulário
  const [formulario, setFormulario] = useState({
    nome: "",
    email: "",
    assunto: "",
    mensagem: "",
  });

  // Estado para armazenar a mensagem de feedback
  const [mensagem, setMensagem] = useState("");

  // Estado para armazenar os contatos recebidos
  const [contatos, setContatos] = useState([]);

  // Função para alterar os campos do formulário
  function alterarCampo(e) {
    setFormulario({ ...formulario, [e.target.name]: e.target.value });
  }

  // Função para enviar o formulário
  function enviarFormulario(e) {
    e.preventDefault(); // Evita o envio padrão do formulário
    fetch("http://localhost:8080/contato.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formulario),
    })
      .then((resposta) => resposta.json())
      .then((dados) => {
        setMensagem(dados.mensagem); // Atualiza a mensagem de feedback com a resposta do servidor
        if (dados.sucesso) {
          setFormulario({ nome: "", email: "", assunto: "", mensagem: "" }); // Limpa o formulário após o envio bem-sucedido
        }
      })
      .catch(() => {
        setMensagem("Erro ao conectar com o servidor.");
      });
  }

  return (
    <>
      <h1>📝 Entre em contato</h1>
      <form onSubmit={enviarFormulario}>
        <div>
          <label>Nome:</label>
          <br />
          <input type="text" name="nome" value={formulario.nome} onChange={alterarCampo} required />
        </div>
        <br />
        <div>
          <label>E-mail:</label>
          <br />
          <input type="email" name="email" value={formulario.email} onChange={alterarCampo} required />
        </div>
        <br />
        <div>
          <label>Assunto:</label>
          <br />
          <input type="text" name="assunto" value={formulario.assunto} onChange={alterarCampo} required />
        </div>
        <br />
        <div>
          <label>Mensagem:</label>
          <br />
          <textarea name="mensagem" value={formulario.mensagem} onChange={alterarCampo} rows="5" required />
        </div>
        <br />
        <button type="submit">Enviar</button>
      </form>

      {mensagem && (
        <>
          <hr />
          <p>{mensagem}</p>
        </>
      )}
    </>
  );
}

export default Contato;