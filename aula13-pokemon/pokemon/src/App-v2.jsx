//versao que permite ao usuário informar o nome do pokemon que deseja consultar, e ao clicar no botão, faz a requisição para a API e atualiza o estado do pokemon com os dados recebidos
import { useState } from "react";

function App() {

  const [nomePokemon, setNomePokemon] = useState("");
  const [pokemon, setPokemon] = useState(null);

  function buscarPokemon() {

    fetch(`https://pokeapi.co/api/v2/pokemon/${nomePokemon.toLowerCase()}`)
      .then((resposta) => resposta.json())
      .then((dados) => {
        setPokemon(dados);
      })
      .catch(() => {
        alert("Pokémon não encontrado!");
        setPokemon(null);
      });

  }

  return (
    <>

      <h1>Consulta de Pokémon</h1>

      <input
        type="text"
        placeholder="Digite o nome do Pokémon"
        value={nomePokemon}
        onChange={(e) => setNomePokemon(e.target.value)}
      />

      <button onClick={buscarPokemon}>
        Buscar
      </button>

      <hr />

      {pokemon && (
        <>
          <h2>{pokemon.name}</h2>

          <img
            src={pokemon.sprites.front_default}
            width="200"
            alt={pokemon.name}
          />

          <p><b>Altura:</b> {pokemon.height} decímetros</p>

          <p><b>Peso:</b> {pokemon.weight} hectogramas</p>

          <p><b>Tipo:</b> {pokemon.types[0].type.name}</p>
        </>
      )}

    </>
  );
}

export default App;