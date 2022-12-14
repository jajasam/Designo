import { Link } from 'react-router-dom'

import '../styles/Cities.scss'

import data from "../assets/data.json"

function Cities() {
    const citiesElem = data.cities.map(({name, img}, i) =>
        <div className={`city bubble-${i}`} key={i}>
            <div className="illustration">
                <img src={require(`../assets/shared/desktop/illustration-${img}.svg`)} alt={name}width="200px" height="200px" />
            </div>
            <div className="text">
                <h3>{name}</h3>
                <Link to="/locations" className="btn dark-btn">See location</Link>
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
