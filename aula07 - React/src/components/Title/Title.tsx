interface Props {
    conteudo: string,
}

const Title = ({conteudo}: Props) => {
    return <h1> {conteudo} </h1>
}

export default Title;