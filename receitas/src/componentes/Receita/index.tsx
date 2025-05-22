import type { IReceita } from "../../interfaces/Receita"
import { FaRegTrashAlt } from "react-icons/fa";
import "./style.css"
import Avaliacao from "../Avaliacao";

const Receita = ({ nome, ingredientes, instrucoes }: IReceita) => {
    return (
        <article className="receita">
            <h2>{nome}</h2>
            <h3>Ingredientes</h3>
            <ul>
                {ingredientes.map((ingrediente, i) => (
                    <li key={i}> {ingrediente.nome} ({ingrediente.quantidade} {ingrediente.medida})   </li>
                ))}
            </ul>
            <h3>Modo de Preparo</h3>
            <ol>
                {instrucoes.map((instrucao, i) => (
                    <li key={i}>{instrucao}</li>
                ))}
            </ol>
            <div className="receita-rodape">
                <Avaliacao/>
                <FaRegTrashAlt />
            </div>
        </article>
    )
}

export default Receita;