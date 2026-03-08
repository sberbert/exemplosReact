import { useState } from "react"

function Idade() {
  const [idade, setIdade] = useState(0)

  return (
    <>
      <button onClick={() => setIdade(idade + 1)}>
        +
      </button>

      <button onClick={() => setIdade(idade - 1)}>
        -
      </button>

      <h3>{idade}</h3>

      <p>
        {idade >= 18 ? "Maior de idade!" : "Menor de idade!"}
        {/*idade >= 18 ? <span style={{ color: 'green' }}>Maior de idade!</span> : <span style={{ color: 'red' }}>Menor de idade!</span> */}
      </p>
    </>
  )
}

export default Idade