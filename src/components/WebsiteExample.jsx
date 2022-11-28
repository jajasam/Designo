import '../styles/WebsiteExample.scss'

function WebsiteExample({ slug, name, description, img }) {
    return (
        <div className="website">
            <img src={require(`../assets/${slug}/desktop/image-${img}.jpg`)} alt={`${name}`} width="320px" height="325px" />
            <div className="text">
                <h3>{name}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default WebsiteExample
