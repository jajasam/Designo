import { useState } from 'react'
import { Link } from "react-router-dom"
import '../styles/Header.scss'
import Navbar from '../components/Navbar'

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    function handleMenuDisplay(e) {
        if (e.target.classList.contains('close')) {
            setIsMenuOpen(false)
        } else {
            setIsMenuOpen(true)
        }
    }

    return (
        <header>
            <div className="content">
                <Link to="/">
                    <img src={require('../assets/shared/desktop/logo-dark.png')} alt="Logo" className="logo" />
                </Link>
                <div className={`hamburger-icon ${isMenuOpen ? 'close' : ''}`} onClick={(e) => handleMenuDisplay(e)}></div>
                <Navbar />
            </div>
            <div className={`menu ${isMenuOpen ? 'show' : ''}`}>
                <Navbar setIsMenuOpen={setIsMenuOpen} />
            </div>
        </header>
    )
}

export default Header
