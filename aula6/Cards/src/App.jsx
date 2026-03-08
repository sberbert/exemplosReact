import { useState } from "react"
import PlanoCard from "./components/PlanoCard"

function App() {
  const [selecionado, setSelecionado] = useState("Pro")

  return (
    <>
      <h1>Escolha seu Plano</h1>

      <div style={{ display: "flex", gap: "20px" }}>
        <PlanoCard
          nome="Básico"
          descricao="Plano básico com recursos limitados"
          preco = {19.90}
          ativo={selecionado === "Básico"} // Verifica se o plano selecionado é "Básico"
          aoSelecionar={() => setSelecionado("Básico")}
        />

        <PlanoCard
          nome="Pro"
          descricao="Plano Pro com recursos avançados"
          preco = {29.90}
          ativo={selecionado === "Pro"} // Verifica se o plano selecionado é "Pro"
          aoSelecionar={() => setSelecionado("Pro")}
        />

        <PlanoCard
          nome="Premium"
          descricao="Plano Premium com recursos exclusivos"
          preco = {39.90}
          ativo={selecionado === "Premium"} // Verifica se o plano selecionado é "Premium"
          aoSelecionar={() => setSelecionado("Premium")}
        />
      </div>
    </>
  )
}

export default App