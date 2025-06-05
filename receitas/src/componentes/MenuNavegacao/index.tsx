import { Link } from "react-router"
import "./style.css"

const MenuNavegacao = () => {
    return (
        <nav>
            <Link to="/">HOME</Link>
            <Link to="adicionar">Nova Receita</Link>
        </nav>
    )
}

export default MenuNavegacao