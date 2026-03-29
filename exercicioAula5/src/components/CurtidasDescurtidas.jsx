import { useState } from 'react'

function CurtidasDescurtidas() {
  const [curtido, setCurtido] = useState(false)
  const [total, setTotal] = useState(0)

  function Curtir() {
    setCurtido(!curtido)
    setTotal(curtido ? total - 1 : total + 1)
  }

  return (
    <button onClick={Curtir}>
      {curtido ? "❤️" : "🤍"} {total}
    </button>
  )
}

export default CurtidasDescurtidas