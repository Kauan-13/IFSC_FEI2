import { FaStar } from "react-icons/fa";

interface Props {
    selecionada: boolean,
    aoSelecionar: () => void
}

const Estrela = ({ selecionada, aoSelecionar }: Props) => {
    
    return (
        <FaStar color={selecionada ? "yellow" : "darkgray"}
            onClick={aoSelecionar}
        />
    );
}

export default Estrela;