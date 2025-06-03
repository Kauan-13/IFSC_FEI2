import "./App.css"
import Cabecalho from "./componentes/Cabecalho";
import Principal from "./componentes/Principal";
import { ReceitaProvider } from "./contextos/ReceitaContext";

const App = () => {
    return (
        <>
            <Cabecalho>Comidinhas da Magali</Cabecalho>
            <ReceitaProvider>
                <Principal />
            </ReceitaProvider>
        </>
    )
}

export default App;