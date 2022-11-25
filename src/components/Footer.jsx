import '../styles/Footer.scss'
import Navbar from '../components/Navbar'
import PreFooter from '../components/PreFooter'
import facebookLogo from '../assets/shared/desktop/icon-facebook.svg';
import youtubeLogo from '../assets/shared/desktop/icon-youtube.svg';
import twitterLogo from '../assets/shared/desktop/icon-twitter.svg';
import pinterestLogo from '../assets/shared/desktop/icon-pinterest.svg';
import instagramLogo from '../assets/shared/desktop/icon-instagram.svg';



function Footer() {
    return (
        <footer>
            <div className="top">
                <img src={require('../assets/shared/desktop/logo-light.png')} alt="Logo" className="logo" />
                <Navbar />
            </div>
            <div className="bottom">
                    <div className="address">
                        <p>Designo Central Office</p>
                        <p>3886 Wellington Street</p>
                        <p>Toronto, Ontario M9C 3J5</p>
                    </div>
                    <div className="contact">
                        <p>Contact Us (Central Office)</p>
                        <p>P : +1 253-863-8967</p>
                        <p>M : contact@designo.co</p>
                    </div>
                <div className="socials">
                    <img src={facebookLogo} alt="Facebook" />
                    <img src={youtubeLogo} alt="Youtube" />
                    <img src={twitterLogo} alt="Twitter" />
                    <img src={pinterestLogo} alt="Pinterest" />
                    <img src={instagramLogo} alt="Instagram" />
                </div>
            </div>
        </footer>
    )
}

export default Footer
