import { Link } from "react-router-dom"

import '../styles/ServiceOverview.scss'

function ServiceOverview({ slug, serviceName, img, device, onHome}) {
    let webDesignImgSize;
    if (device === 'desktop' && onHome) {
        webDesignImgSize = '-large'
    } else if (device === 'desktop' && !onHome) {
        webDesignImgSize = '-small'
    } else {
        webDesignImgSize = ''
    }

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
