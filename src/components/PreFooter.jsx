import { Link } from 'react-router-dom'
import '../styles/PreFooter.scss'

function PreFooter() {
    return (
        <div className="get-in-touch">
            <div>
                <p>Let's talk about your project</p>
                <p>Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.</p>
            </div>
            <Link to="/contact" className="btn light-btn">Get in touch</Link>
        </div>
    )
}

export default PreFooter
