import '../styles/ServiceBanner.scss'

function ServiceBanner({ slug, title, description }) {
    return (
        <div className={`service-banner container ${slug}`}>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    )
}

export default ServiceBanner
