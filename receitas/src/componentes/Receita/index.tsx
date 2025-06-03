import { FaRegTrashAlt } from "react-icons/fa";
import { BiEditAlt } from "react-icons/bi";

import "./style.css"
import Avaliacao from "../Avaliacao";
import useReceita from "../../hooks/useReceita";

interface Props {
    id: number,
}


const Receita = ({id}: Props) => {

    const {receitas, aoEditar, apagarReceita} = useReceita();

    const receita = receitas.find(receita => receita.id === id);

    return (
        <article className="receita">
            <h2>{receita!.nome}</h2>
            <h3>Ingredientes</h3>
            <ul>
                {receita!.ingredientes.map((ingrediente, i) => (
                    <li key={i}> {ingrediente.nome} ({ingrediente.quantidade} {ingrediente.medida})   </li>
                ))}
            </ul>
            <h3>Modo de Preparo</h3>
            <ol>
                {receita!.instrucoes.map((instrucao, i) => (
                    <li key={i}>{instrucao}</li>
                ))}
            </ol>
            <div className="receita-rodape">
                <Avaliacao/>
                <div>
                    <BiEditAlt onClick={() => aoEditar(id)}/>
                    <FaRegTrashAlt onClick={() => apagarReceita(id)}/>
                </div>
            </div>
        </article>
    )
}

export default Receita;