function Formulario({ nome, setNome, lanche, setLanche, bebida, setBebida }) {

  return (
    <>
      <input 
        type="text" 
        placeholder="Seu nome" 
        value={nome} //O valor do input vem do estado (value) e muda com o onChange
        onChange={(e) => setNome(e.target.value)}
      />    

      <br />
  
      <select value={lanche} 
              onChange={(e) => setLanche(e.target.value)}>
      <option>Escolha um lanche</option>
      <option>X-Burguer</option>
      <option>X-Salada</option>
      <option>Hot Dog</option>
    </select>

    <br />
    </>
  )
}

export default Formulario