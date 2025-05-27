import type { IReceita } from "../../interfaces/Receita"

interface Props {
    receita: IReceita | undefined
    aoAtualizar: (r: IReceita) => void
}

const Formulario = ({receita, aoAtualizar}: Props) => {

    // if (!receita) {
    //     return <p>Selecione Receita</p>
    // }

    return (
        <>
            { receita &&
                <form>
                    <h2>Editar Receita</h2>
                    <input type="text" name="nome" value={receita.nome} onChange={(e: React.ChangeEvent<HTMLInputElement>) => aoAtualizar({...receita, nome: e.target.value})}/>
                    <h3>Ingredientes</h3>
                    <ul>
                        {receita.ingredientes.map((ingrediente, i) => (
                            <li key={i}>
                                <input type="text" name="ingrediente" value={ingrediente.nome}/>
                                <input type="number" name="quantidade" value={ingrediente.quantidade}/>
                                <input type="text" name="medida" value={ingrediente.medida}/>
                            </li>
                        ))}
                    </ul>
                    <h3>Modo de Preparo</h3>
                    <ol>
                        {receita.instrucoes.map((instrucao, i) => (
                            
                                <li key={i}>
                                    <input type="text" name="instrucao" value={instrucao}/>
                                </li>
                            
                        ))}
                    </ol>
                </form>
            }
        </>
    )
}

export default Formulario;