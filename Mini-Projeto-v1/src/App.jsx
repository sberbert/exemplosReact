import { useState } from "react"
import Tarefa from "./components/Tarefa"

function App() {

  const [tarefas, setTarefas] = useState([
    { texto: "Estudar React", concluida: false },
    { texto: "Fazer exercícios", concluida: false },
    { texto: "Assistir aula", concluida: false }
  ])

  function concluirTarefa(index) {
    const novasTarefas = [...tarefas] // Cria uma cópia do array de tarefas
    novasTarefas[index].concluida = !novasTarefas[index].concluida // Alterna o status de conclusão da tarefa
    setTarefas(novasTarefas) // Atualiza o estado com a nova lista de tarefas
  }

  return (
    <>
      <h1>Lista de Tarefas</h1>

      <ul>
        {tarefas.map((tarefa, index) => (

          <Tarefa
            key={index}
            tarefa={tarefa}
            aoClicar={() => concluirTarefa(index)}
          />

        ))}
      </ul>
    </>
  )
}

export default App