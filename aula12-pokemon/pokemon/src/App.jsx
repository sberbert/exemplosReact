import { useState, useEffect } from 'react'

function App() {

  const [pokemon, setPokemon] = useState(null)

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
   .then((resposta) => resposta.json())
   .then((dados) => {
    setPokemon(dados) // aqui estamos atualizando o estado do pokemon com os dados recebidos da API
   })
  }, [])

  if (!pokemon) {
    return <p>Carregando...</p>
  }

  return (
    <>
    <h1>{pokemon.name}</h1>
    <hr />
    <img src={pokemon.sprites.front_default} width="200" alt={pokemon.name} />
    
    <p><b>Altura:</b> {pokemon.height} decímetros</p>
    <p><b>Peso:</b> {pokemon.weight} hectogramas</p>
    <p><b>Tipo:</b> {pokemon.types[0].type.name} </p>
    </>
  )
}

export default App