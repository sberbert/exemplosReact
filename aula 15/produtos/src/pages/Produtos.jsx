import { Link } from "react-router-dom"

function Produtos(){

    const produtos = [
        {
            id: 1,
            nome: "Mouse",
            preco: 50
        },
        {
            id: 2,
            nome: "Teclado",
            preco: 100
        },
        {
            id: 3,
            nome: "Monitor",
            preco: 800
        }
    ]    

    return(
        <>
            <h1>📦 Produtos</h1>
            <p>Lista de produtos.</p>

            <ul>
                {produtos.map((produto) => (
                    <li key={produto.id}>
                        <Link to={`/produtos/${produto.id}`}>{produto.nome}</Link>
                    </li>
                ))}
            </ul>               
        </>
    )

}

export default Produtos