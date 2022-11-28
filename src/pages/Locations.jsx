import SingleLocation from '../components/SingleLocation'
import '../styles/Locations.scss'

import data from '../assets/data.json'

function Locations() {
const locationsElem = data.cities.map(({name, office, address, phone, mail}, i) => <SingleLocation
        name={name}
        office={office}
        address={address}
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
        </div>
    )
}

export default Locations
