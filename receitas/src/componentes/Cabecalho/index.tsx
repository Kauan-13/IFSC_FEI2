import MenuNavegacao from "../MenuNavegacao";
import "./style.css";

interface Props {
    children: string,
}

const Cabecalho = ({children}: Props) => {
    return (
        <header>
            <h1>{children}</h1>
            <MenuNavegacao/>
        </header>
    );
}

export default Cabecalho;