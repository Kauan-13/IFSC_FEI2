import { useContext } from "react";
import { ReceitaContext } from "../contextos/ReceitaContext";
import type { IReceita } from "../interfaces/Receita";

const useReceita = () => {

    const { receitas, receitaSelecionada, setReceitas, setReceitaSelecionada } = useContext(ReceitaContext);

    const apagarReceita = (id: number) => {
        setReceitas(receitas.filter(receita => receita.id != id));
    }

    const atualizarReceita = (receita: IReceita) => {
        setReceitas(receitas.map(r => (r.id === receita.id ? receita : r)));
        setReceitaSelecionada(receita);
    }

    const aoEditar = (id: number) => {
        const receita = receitas.find(receita => receita.id === id);
        !receita ? setReceitaSelecionada(null) : setReceitaSelecionada(receita);
    }

    return {
        receitas,
        setReceitas,
        receitaSelecionada,
        setReceitaSelecionada,
        apagarReceita,
        atualizarReceita,
        aoEditar
    }

}

export default useReceita;