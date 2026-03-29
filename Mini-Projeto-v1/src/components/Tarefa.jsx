function Tarefa({ tarefa, aoClicar }) {

  return (
      <>
        <span onClick={aoClicar} 
              style={{ 
                cursor: "pointer",
                textDecoration: tarefa.concluida ? "line-through" : "none", //opcional
                color: tarefa.concluida ? "gray" : "black"   //opcional             
              }}>
          {tarefa.texto}
          {tarefa.concluida && " ✅"}
        </span>
        <br />
      </>      
  )
}

export default Tarefa