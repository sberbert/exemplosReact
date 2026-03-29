import { useState } from 'react'

function Curtidas() {
    const [likes, setLikes] = useState(0)

 function curtir() {
    setLikes(likes + 1)
 }

 return (
 <>
    <h3>Curtidas: {likes}</h3>
    <button onClick={curtir}>❤ Curtir</button>
 </>
 )
}

export default Curtidas