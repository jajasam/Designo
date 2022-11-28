import SingleLocation from '../components/SingleLocation'
import '../styles/Locations.scss'

import data from '../assets/data.json'
import PreFooter from '../components/PreFooter'

function Locations() {
const locationsElem = data.cities.map(({name, office, address, coordinates, phone, mail}, i) => <SingleLocation
        name={name}
        office={office}
        address={address}
        coordinates={coordinates}
        phone={phone}
        mail={mail}
        key={i}
    />
)

    return (
        <div className="locations">
            {
                locationsElem && locationsElem
            }
            <PreFooter />
        </div>
    )
}

export default Locations
