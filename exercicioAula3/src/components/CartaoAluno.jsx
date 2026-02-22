function CartaoAluno({ nome, curso }) {

  function mostrarNome() {
    alert(nome)
  }

  return (
    <div>
      <h2>{nome}</h2>
      <p>Curso: {curso}</p>

      <button onClick={mostrarNome}>
        Mostrar nome
      </button>

      <hr />
    </div>
  )
}

export default CartaoAluno