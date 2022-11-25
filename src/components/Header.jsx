import '../styles/Header.scss'
import Navbar from '../components/Navbar'

function Header() {
    return (
        <header>
            <div className="content">
                <img src={require('../assets/shared/desktop/logo-dark.png')} alt="Logo" className="logo" />
                <div className="hamburger-icon"></div>
                <Navbar />
            </div>
        </header>
    )
}

export default Header
