import { FaRegTrashAlt } from "react-icons/fa";
import { BiEditAlt } from "react-icons/bi";

import "./style.css"
import Avaliacao from "../Avaliacao";

interface Props {
    id: number,
    nome: string,
    ingredientes: {
        nome: string,
        quantidade: number,
        medida: string
    }[],
    instrucoes: string[],
    aoDeletar: (id: number) => void,
    aoEditar: (id: number) => void
}


const Receita = ({id, nome, ingredientes, instrucoes, aoDeletar, aoEditar }: Props) => {
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
                <div>
                    <BiEditAlt onClick={() => aoEditar(id)}/>
                    <FaRegTrashAlt onClick={() => aoDeletar(id)}/>
                </div>
            </div>
        </article>
    )
}

export default Receita;