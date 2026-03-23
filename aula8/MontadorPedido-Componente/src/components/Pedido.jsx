function Pedido({ nome, lanche, bebida }) {
  return (
    <>
    <p><b>Pedido de {nome}:</b></p>
    {lanche}
    <br />
    {bebida && "Bebida incluída"}
    </>
  )
}

export default Pedido