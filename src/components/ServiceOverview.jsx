import '../styles/ServiceOverview.scss'

function ServiceOverview({ serviceName, img, device }) {
    return (
        <div className="services">
            {
                device && 
                <img src={require(`../assets/home/${device}/image-${img}.jpg`)} alt={`${serviceName}`} width="100%" height="100%" />
            }
            <h2>{serviceName}</h2>
            <a href="#">View Projects</a>
        </div>
    )
}

export default ServiceOverview
