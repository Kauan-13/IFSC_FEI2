import { useState } from "react";
import Estrela from "../Estrela";


const Avaliacao = () => {
    const numEstrelas: number = 5;
    const estrelas = [...Array(numEstrelas)];
    const [avaliacao, setAvaliacao] = useState(0);

    return (
        <div className="avaliacao">
            {estrelas.map((_, i) => (
                <Estrela key={i} selecionada={avaliacao > i} aoSelecionar = {() => setAvaliacao(i + 1)}/>
            ))}
        </div>
    )
}

export default Avaliacao