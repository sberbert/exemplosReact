/*function Aluno(props) {
  return <h2>Aluno: {props.nome}</h2>
}*/

/*function Aluno(props) {
  return (
    <>
    <b>Nome:</b> <span>{props.nome}</span>
    <br/>
    <b>Curso:</b> <span>{props.curso}</span>     
    <br/><br/>
    </>
  )
}*/

/* function Aluno({nome, curso}) {
  return (
    <>
    <b>Nome:</b> <span>{nome}</span>
    <br/>
    <b>Curso:</b> <span>{curso}</span>     
    <br/><br/>
    </>
  )
} */

function Aluno({ nome }) {
  function mostrar() {
    alert(nome)
  }
  return <button onClick={mostrar}>{nome}</button>
}

export default Aluno