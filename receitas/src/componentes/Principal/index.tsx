import "./style.css"

import Receita from "../Receita";
import Formulario from "../Formulario";
import useReceita from "../../hooks/useReceita";

const Principal = () => {

    const {receitas, atualizarReceita} = useReceita();

    return (
        <main className="receitas">
            {receitas.map((receita) => (
                <Receita 
                    key={receita.id} 
                    id={receita.id}
                />
                
            ))}
            <Formulario aoAtualizar={atualizarReceita} receita={null}/>
        </main>
    )

}

export default Principal;