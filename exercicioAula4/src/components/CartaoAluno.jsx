import './CartaoAluno.css'
//import styles from './CartaoAluno.module.css' 

function CartaoAluno({ nome, curso }) {

  function mostrarNome() {
    alert(nome)
  }

  return (
      <div className="card">
      {/*<div className={styles.card}>*/}

      <h2>{nome}</h2>
      <p>Curso: {curso}</p>

      <button onClick={mostrarNome}>
        Mostrar nome
      </button>

    </div>
  )
}

export default CartaoAluno