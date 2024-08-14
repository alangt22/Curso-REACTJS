import { useFetch } from "../hooks/UseFetch"
import { useParams, Link } from "react-router-dom"

const Product = () => {

    const {id} = useParams()

    const url = 'http://localhost:3000/products/' + id;

    const {data: product} = useFetch(url);

    if(!product) return <p>Carregando...</p>

  return (
    <div>
        <p>ID do produto: {id}</p>
        <div>
            <h1>{product.name}</h1>
            <p>R${product.price}</p>
            {/*8-nested route */}
            <Link to={`/products/${product.id}/info`}>Mais informações </Link>
        </div>
    </div>
  )
}

export default Product