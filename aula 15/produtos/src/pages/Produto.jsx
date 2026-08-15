import { useParams, Link } from "react-router-dom"

function Produto() {
    const { id } = useParams()

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

    const produto = produtos.find(
        (produto) => produto.id === Number(id)
    )

    if (!produto) {
    return <p>Produto não encontrado.</p>
    }

 return (
 <>
    <h1>📝 Detalhes do Produto</h1>
    
    <p>🆔: {produto.id}</p    >
    <p>🏷 <b>Nome:</b> {produto.nome}</p>
    <p>💰 <b>Preço:</b> R$ {produto.preco}</p>

    <Link to="/produtos">◀ Voltar</Link>
 </>
 )
}

export default Produto