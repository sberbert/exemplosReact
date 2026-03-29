function Bebida({ bebida, setBebida, quantidade }) {
  return (
    <>
      {quantidade > 0 && ( //Exibe a opção de bebida apenas se a quantidade for maior que 0 
        <label>
          <input
            type="checkbox"
            checked={bebida}
            onChange={(e) => setBebida(e.target.checked)}
          />
          Deseja bebida? 🥤
        </label>
      )}
    </>
  )
}

export default Bebida