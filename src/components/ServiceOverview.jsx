import { Link } from "react-router-dom"

import '../styles/ServiceOverview.scss'

function ServiceOverview({ slug, serviceName, img, device }) {
    return (
        <div className="service">
                {
                    device && 
                    <img src={require(`../assets/home/${device}/image-${img}.jpg`)} alt={`${serviceName}`} width="100%" height="100%" />
                }
                <h2>{serviceName}</h2>
                <Link to={`/service/${slug}`}>View Projects</Link>
        </div>
    )
}

export default ServiceOverview
