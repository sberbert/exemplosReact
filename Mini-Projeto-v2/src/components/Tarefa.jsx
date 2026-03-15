function Tarefa({ tarefa, aoClicar, aoRemover }) {

  return (
    <>
      <span onClick={aoClicar} 
            style={{ 
            cursor: "pointer",
            textDecoration: tarefa.concluida ? "line-through" : "none", //opcional
            color: tarefa.concluida ? "gray" : "black"   //opcional   
            }}              
      >
        {tarefa.texto}
        {tarefa.concluida && " ✅"}
      </span>
      
        <span onClick={aoRemover} style={{ cursor: "pointer" }}>
          ❌
        </span>    
        <br />
    </>
  )

}

export default Tarefa