import { Link } from "react-router-dom"

import '../styles/Navbar.scss'

function Navbar({ setIsMenuOpen }) {
    const navLinks = [
        {
            'route': 'about',
            'link': 'Our company'
        },
        {
            'route': 'locations',
            'link': 'Locations'
        },
        {
            'route': 'contact',
            'link': 'Contact'
        }
    ]
        

    const navElems = navLinks.map(({route, link}, i) => (
        <li key={i}>
            <Link 
                to={`/${route}`} 
                onClick={() => setIsMenuOpen(false)}>
                {link}
            </Link>
        </li>
    ))
    return (
        <nav>
            <ul>
                {
                    navElems && navElems
                }
            </ul>
        </nav>
    )
}

export default Navbar
