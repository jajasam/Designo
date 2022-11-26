import '../styles/Quality.scss'

function Quality({ qualityName, description, i }) {
    return (
        <div className={`quality bubble-${i}`} >
            <div className="illustration">
                <img src={require(`../assets/home/desktop/illustration-${qualityName}.svg`)} alt={`${qualityName}`} width="200px" height="200px" />
            </div>
            <div className="text">   
                <h3>{qualityName}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default Quality
