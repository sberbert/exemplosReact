function Pedido ({ nome, lanche, quantidade, bebida, aoRemover, aoEditar  }) {
  return (
    <>
      <hr />
      🍽 <b>Pedido de {nome}:</b> <br />
      {lanche && quantidade > 0 && (
        <p>  
          {quantidade} {lanche} 🍔
          <br />
          {bebida && "Bebida incluída 🥤"}
          <br /><br />
          <button onClick={aoRemover}>❌ Excluir Pedido</button>
          <button onClick={aoEditar}>✏️ Editar Pedido</button>
        </p>
      )}
    </>
  )
}

export default Pedido