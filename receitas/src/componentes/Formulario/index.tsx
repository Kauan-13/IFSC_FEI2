import InputIngrediente from "../InputIngrediente"
import { IoClose } from "react-icons/io5";
import useReceita from "../../hooks/useReceita";
import "./style.css"

const Formulario = () => {

    const {receitaSelecionada, setReceitaSelecionada, atualizarReceita} = useReceita();

    if (!receitaSelecionada) return <h2>Receita não selecionada</h2>

    return (
        <>
            {receitaSelecionada &&
                <form>
                    <div className="titulo-formulario">
                        <h2>Editar Receita</h2>
                        <IoClose className="fechar-icone" onClick={() => setReceitaSelecionada(null)}/>
                    </div>
                    <input type="text" name="nome" value={receitaSelecionada.nome} onChange={(e: React.ChangeEvent<HTMLInputElement>) => atualizarReceita({ ...receitaSelecionada, nome: e.target.value })} />
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
                                            atualizarReceita({ ...receitaSelecionada, ingredientes })
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
                                    atualizarReceita({ ...receitaSelecionada, instrucoes })
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