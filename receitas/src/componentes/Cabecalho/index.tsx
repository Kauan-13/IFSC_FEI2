import "./style.css";

interface Props {
    children: string,
}

const Cabecalho = ({children}: Props) => {
    return (
        <header>
            <h1>{children}</h1>
        </header>
    );
}

export default Cabecalho;