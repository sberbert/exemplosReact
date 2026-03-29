import { useState } from "react"
import Tarefa from "./components/Tarefa"

function App() {

  const [tarefas, setTarefas] = useState([]) // Estado para armazenar a lista de tarefas
  const [novaTarefa, setNovaTarefa] = useState("") // Estado para armazenar o valor da nova tarefa a ser adicionada

  function adicionarTarefa() {
    if (novaTarefa === "") return

    // Cria uma nova lista de tarefas, adicionando a nova tarefa ao final da lista existente
    const novaLista = [
      ...tarefas, 
      { texto: novaTarefa, concluida: false } 
    ] //

    setTarefas(novaLista)
    setNovaTarefa("") // Limpa o campo de entrada após adicionar a tarefa
  }

  function concluirTarefa(index) {
    const novasTarefas = [...tarefas] // Cria uma cópia da lista de tarefas para evitar mutação direta do estado
    novasTarefas[index].concluida = !novasTarefas[index].concluida // Alterna o status de conclusão da tarefa selecionada
    setTarefas(novasTarefas)
  }

  function removerTarefa(index) {
    const novasTarefas = tarefas.filter((_, i) => i !== index)
    setTarefas(novasTarefas)
  }  

  const tarefasConcluidas = tarefas.filter(tarefa => tarefa.concluida)
  const tarefasNaoConcluidas = tarefas.filter(tarefa => !tarefa.concluida)
  
    return (
    <>
      <h1>Lista de Tarefas</h1>

      <input
        type="text"
        value={novaTarefa}
        onChange={(e) => setNovaTarefa(e.target.value)} // Atualiza o estado novaTarefa conforme o usuário digita no campo de entrada
        placeholder="Digite uma tarefa"
      />

      <button onClick={adicionarTarefa}>
        Adicionar
      </button>

      <ul>
        {tarefas.map((tarefa, index) => (

          <Tarefa
            key={index}
            tarefa={tarefa}
            aoClicar={() => concluirTarefa(index)}
            aoRemover={() => removerTarefa(index)}
          />

        ))}
      </ul>

      <p>Total de tarefas: {tarefas.length}</p>
      <p>Tarefas concluídas: {tarefasConcluidas.length}</p>
      <p>Tarefas não concluídas: {tarefasNaoConcluidas.length}</p>      

    </>
  )
}

export default App