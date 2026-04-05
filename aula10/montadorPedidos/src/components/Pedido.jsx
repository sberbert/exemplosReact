function Pedido ({ nome, lanche, quantidade, bebida }) {
  return (
    <>
      <hr />
      🍽 <b>Pedido de {nome}:</b> <br />
      {lanche && quantidade > 0 && (
        <p>  
          {quantidade} {lanche} 🍔
          <br />
          {bebida && "Bebida incluída 🥤"}
        </p>
      )}
    </>
  )
}

export default Pedido