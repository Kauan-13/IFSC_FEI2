import { useContext } from "react"
import type { IReceita } from "../../interfaces/Receita"
import InputIngrediente from "../InputIngrediente"
import { ReceitaContext } from "../../contextos/ReceitaContext"

interface Props {
    receita: IReceita | null
    aoAtualizar: (r: IReceita) => void
}

const Formulario = ({ aoAtualizar }: Props) => {

    const {receitaSelecionada} = useContext(ReceitaContext);

    return (
        <>
            {receitaSelecionada &&
                <form>
                    <h2>Editar Receita</h2>
                    <input type="text" name="nome" value={receitaSelecionada.nome} onChange={(e: React.ChangeEvent<HTMLInputElement>) => aoAtualizar({ ...receitaSelecionada, nome: e.target.value })} />
                    <h3>Ingredientes</h3>
                    <ul>
                        {receitaSelecionada.ingredientes.map((ingrediente, i) => (
                            <li key={i}>
                                <InputIngrediente
                                    nome={ingrediente.nome}
                                    quantidade={ingrediente.quantidade}
                                    medida={ingrediente.medida}
                                    aoAtualizar={
                                        (ingredienteAtualizado) => {
                                            const ingredientes = receitaSelecionada.ingredientes.map((ing, j) => i === j ? ingredienteAtualizado : ing);
                                            aoAtualizar({ ...receitaSelecionada, ingredientes })
                                        }
                                    } />
                            </li>
                        ))}
                    </ul>
                    <h3>Modo de Preparo</h3>
                    <ol>
                        {receitaSelecionada.instrucoes.map((instrucao, i) => (
                            <li key={i}>
                                <input type="text" name="instrucao" value={instrucao} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                    const instrucoes = receitaSelecionada.instrucoes.map((inst, j) => i === j ? e.target.value : inst);
                                    aoAtualizar({ ...receitaSelecionada, instrucoes })
                                }} />
                            </li>
                        ))}
                    </ol>
                </form>
            }
        </>
    )
}

export default Formulario;