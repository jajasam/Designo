import { Link } from "react-router-dom"

import '../styles/ServiceOverview.scss'

function ServiceOverview({ slug, serviceName, img, device }) {
    const webDesignImgSize = window.innerWidth > 1111 ? '-large': '-small';

    return (
        <Link to={`/service/${slug}`} className="service-overview">
                {
                    device && 
                    <img src={require(`../assets/home/${device}/image-${img}${serviceName === 'Web Design' ? webDesignImgSize : ''}.jpg`)} alt={`${serviceName}`} width="100%" height="100%" />
                }
                <h2>{serviceName}</h2>
                <p>View Projects</p>
        </Link>
    )
}

export default ServiceOverview
