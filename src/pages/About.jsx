import Cities from '../components/Cities'
import data from "../assets/data.json"


function About() {
    const citiesElem = <Cities cities={data.cities} />
    return (
        <div className="about container">
            <div className="banner"></div>
            {
                citiesElem && citiesElem
            }
        </div>
    )
}

export default About
