function Contador({ quantidade, setQuantidade }) {

  function aumentar() {
    setQuantidade(quantidade + 1)
  }

  function diminuir() {
    if (quantidade > 0) {
      setQuantidade(quantidade - 1)
    }
  }

  return (
    <>
      <h3>Quantidade</h3>

      <button onClick={aumentar}>+</button>
      <button onClick={diminuir}>-</button>

      <p>{quantidade}</p>
    </>
  )
}

export default Contador