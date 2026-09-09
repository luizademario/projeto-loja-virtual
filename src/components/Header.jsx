import { Link } from "react-router"

const Header = ({ cart, setCart }) => {

    const adicionarCarinho = () => {
        setCart((prev) => prev + 1)
    }

    return (
        <header className="header">
            <div className="logo">🛍️ ReactShop</div>

            <ul className="nav">
                <li><Link to="/">Início</Link></li>
                <li><Link to="/produtos">Produtos</Link></li>
                <li><Link to="/contato">Contato</Link></li>
            </ul>

            <div className="header-actions">
                <span className="icon-button">🔍</span>
                <span className="icon-button">❤️</span>
                <span className="icon-button cart" onClick={adicionarCarinho}>
                    🛒
                    <span className="badge">{cart}</span>
                </span>
            </div>
        </header>
    )
}

export default Header
