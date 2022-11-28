import { Link } from "react-router-dom"

import '../styles/Navbar.scss'

function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/about">Our company</Link>
                </li>
                <li>
                    <Link to="/locations">Locations</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
