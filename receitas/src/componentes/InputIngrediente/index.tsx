interface Ingrediente {
    nome: string,
    quantidade: number,
    medida: string,
}


interface Props {
    nome: string,
    quantidade: number,
    medida: string,
    aoAtualizar: (Ingrediente: Ingrediente) => void
}

const InputIngrediente = ({nome, quantidade, medida, aoAtualizar}: Props) => {
    return (
        <>
            <input type="text" name="nome" value={nome} onChange={(e: React.ChangeEvent<HTMLInputElement>) => aoAtualizar({nome: e.target.value, quantidade, medida})}/>
            <input type="number" name="quantidade" value={quantidade} onChange={(e: React.ChangeEvent<HTMLInputElement>) => aoAtualizar({nome, quantidade: e.target.valueAsNumber, medida})}/>
            <input type="text" name="medida" value={medida} onChange={(e: React.ChangeEvent<HTMLInputElement>) => aoAtualizar({nome, quantidade, medida: e.target.value})}/>
        </>
    )
}

export default InputIngrediente;