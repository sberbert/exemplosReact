//importando o useParams e Link do react-router-dom
import { useParams, Link } from "react-router-dom" 


function Produto() { //
    //useParams é um hook que retorna um objeto de pares chave/valor dos parâmetros da URL. Neste caso, estamos desestruturando o objeto para obter o valor do parâmetro id. 
    const { id } = useParams() 

    //criando um array de produtos com id, nome e preço
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
    
    //usando o método find para encontrar o produto com o id correspondente ao parâmetro da URL. O método find retorna o primeiro elemento do array que satisfaz a condição fornecida na função de callback. Neste caso, estamos comparando o id do produto com o id obtido dos parâmetros da URL, convertendo-o para número com Number() para garantir que a comparação seja feita corretamente.
    const produto = produtos.find(
        (produto) => produto.id === Number(id)
    )

    if (!produto) {
    return <p>🛑 Produto não encontrado.</p>
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