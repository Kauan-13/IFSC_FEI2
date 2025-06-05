import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css"
import Cabecalho from "./componentes/Cabecalho";
import Principal from "./componentes/Principal";
import { ReceitaProvider } from "./contextos/ReceitaContext";
import Formulario from "./componentes/Formulario";

const AppRoutes = () => {
    return (
        <>
            <BrowserRouter>
                <Cabecalho>Comidinhas da Magali</Cabecalho>
                <ReceitaProvider>
                    <Routes>
                        <Route index element={<Principal />}/>
                        <Route path="adicionar" element={<Formulario/>}></Route>
                        <Route path="*" element={<h1>404 not found :/</h1>}/>
                    </Routes>
                </ReceitaProvider>
            </BrowserRouter>
        </>
    )
}

export default AppRoutes;