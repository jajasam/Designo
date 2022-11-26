import '../styles/Cities.scss'

function Cities({ cities }) {
    const citiesElem = cities.map(({name, img}, i) =>
        <div className={`city bubble-${i}`} key={i}>
            <div className="illustration">
                <img src={require(`../assets/shared/desktop/illustration-${img}.svg`)} alt={name}width="200px" height="200px" />
            </div>
            <div className="text">
                <h3>{name}</h3>
                <button className="dark-btn">See location</button>
            </div>
        </div>
    )    

    return (
        <div className="cities container">
            {
                citiesElem && citiesElem
            }
        </div>
    )
}

export default Cities
