import { Repositorios } from "../../components/Repositorio";
import { useParams } from "react-router-dom"  //hook que vai deixar eu trabalhar com a rota na url

export default function Repositories() {
    const { usuario } = useParams()
    /*aqui estou pegando a variavel usuario que esta sendo enviada por meio da rota
    para enviar uma variavel entre paginas é necessario, na definicao da rota definir
    a variavel utilizando a sintaxe /:nome da variavel*/

    return (
        <>
            <Repositorios
                usr={usuario || ""}
            />
        </>
    )
}
