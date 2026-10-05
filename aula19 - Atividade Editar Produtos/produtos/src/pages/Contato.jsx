import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

function Contato() {

  const { id } = useParams() // Obtém o ID do contato da URL, se houver

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
  //const [contatos, setContatos] = useState([]);

  // Função para alterar os campos do formulário
  function alterarCampo(e) {
    setFormulario({ ...formulario, [e.target.name]: e.target.value });
  }

  /* useEffect - executabação automaticamente qd alguma info muda
  nesse caso, quando o id da URL muda, busca os dados do contato p/ montar 
  o componente de edição. Se não houver id, limpa o formulário para cadastro de novo contato.*/
useEffect(() => {
  if (id) {
    fetch(`http://localhost:8080/contato.php?id=${id}`)
      .then((resposta) => resposta.json())
      .then((dados) => {
        setFormulario({
          nome: dados.nome,
          email: dados.email,
          assunto: dados.assunto,
          mensagem: dados.mensagem,
        });
      })
      .catch(() => {
        console.log("Erro ao buscar os dados do contato.");
      });

  } else {
    setFormulario({
      nome: "",
      email: "",
      assunto: "",
      mensagem: "",
    });
  }
}, [id]);

  // Função para enviar o formulário
  function enviarFormulario(e) {
    e.preventDefault(); // Evita o envio padrão do formulário
    if (id) {
      atualizarContato()
    } else {
      cadastrarContato()
    }
}

  // Função para enviar o formulário
  function cadastrarContato() {
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

  function atualizarContato() {
    const dados = { id: id, ...formulario } // Adiciona o ID do contato aos dados do formulário 
    fetch("http://localhost:8080/contato.php", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dados)
    })
      .then((resposta) => resposta.json())
      .then((dados) => {
        setMensagem(dados.mensagem)
      })
      .catch(() => {
        setMensagem("Erro ao conectar com o servidor.");
      });
  }  

  function alterarStatus(id, status) {

  fetch("http://localhost:8000/contato.php", {

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

    .catch(() => {

      console.log("Erro ao alterar o status.")

    })

}

  return (
    <>
      <h1>📝 {id ? " Editar contato" : " Entre em contato"}</h1>
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
        <button type="submit">
          {id ? "Salvar alteração" : "Enviar"}
        </button>
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