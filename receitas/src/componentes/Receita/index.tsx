import "./style.css"

interface Ingredientes {
    nome: string,
    quantidade: number,
    medida: string
}

interface Props {
    nome: string,
    ingredientes: Ingredientes[],
    instrucoes: string[]
}

const Receita = ({ nome, ingredientes, instrucoes }: Props) => {
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
        </article>
    )
}

export default Receita;