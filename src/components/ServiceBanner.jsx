import '../styles/ServiceBanner.scss'

function ServiceBanner({ title, description }) {
    return (
        <div className="service-banner container">
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    )
}

export default ServiceBanner
