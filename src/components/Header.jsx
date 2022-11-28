import { Link } from "react-router-dom"
import '../styles/Header.scss'
import Navbar from '../components/Navbar'

function Header() {
    return (
        <header>
            <div className="content">
                <Link to="/">
                    <img src={require('../assets/shared/desktop/logo-dark.png')} alt="Logo" className="logo" />
                </Link>
                <div className="hamburger-icon"></div>
                <Navbar />
            </div>
        </header>
    )
}

export default Header
