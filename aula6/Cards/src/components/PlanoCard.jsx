function PlanoCard({ nome, descricao, preco, ativo, aoSelecionar }) {

  return (
    <div
      onClick={aoSelecionar}
      style={{
        border: ativo ? "3px solid green" : "1px solid gray",
        borderRadius: "8px",
        padding: "20px",
        width: "150px",
        cursor: "pointer",
        backgroundColor: ativo ? "#eaffea" : "white"
      }}
    >
        
      <h3>{nome}</h3>
      <p>{descricao}</p>
      <p><b>R$ {preco.toFixed(2)}</b></p>   

      {ativo && <p><b>Plano selecionado ✅</b></p>}
    </div>
  )

}

export default PlanoCard