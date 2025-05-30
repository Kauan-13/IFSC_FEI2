import type { IReceita } from "../../interfaces/Receita"
import InputIngrediente from "../InputIngrediente"

interface Props {
    receita: IReceita | undefined
    aoAtualizar: (r: IReceita) => void
}

const Formulario = ({ receita, aoAtualizar }: Props) => {
    return (
        <>
            {receita &&
                <form>
                    <h2>Editar Receita</h2>
                    <input type="text" name="nome" value={receita.nome} onChange={(e: React.ChangeEvent<HTMLInputElement>) => aoAtualizar({ ...receita, nome: e.target.value })} />
                    <h3>Ingredientes</h3>
                    <ul>
                        {receita.ingredientes.map((ingrediente, i) => (
                            <li key={i}>
                                <InputIngrediente
                                    nome={ingrediente.nome}
                                    quantidade={ingrediente.quantidade}
                                    medida={ingrediente.medida}
                                    aoAtualizar={
                                        (ingredienteAtualizado) => {
                                            const ingredientes = receita.ingredientes.map((ing, j) => i === j ? ingredienteAtualizado : ing);
                                            aoAtualizar({ ...receita, ingredientes })
                                        }
                                    } />
                            </li>
                        ))}
                    </ul>
                    <h3>Modo de Preparo</h3>
                    <ol>
                        {receita.instrucoes.map((instrucao, i) => (
                            <li key={i}>
                                <input type="text" name="instrucao" value={instrucao} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                    const instrucoes = receita.instrucoes.map((inst, j) => i === j ? e.target.value : inst);
                                    aoAtualizar({ ...receita, instrucoes })
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