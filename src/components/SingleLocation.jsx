import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';


import '../styles/SingleLocation.scss'

function SingleLocation({ name, office, address, phone,mail }) {
    return (
        <div className="location">
            <MapContainer
                center={[45.4946099,-73.5608102]}
                zoom={13}
                scrollWheelZoom={false}
            >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            </MapContainer>
            <div className="info">
                <h2>{name}</h2>
                <div className="office">
                    <p>{office}</p>
                    <p>{address}</p>
                </div>
                <div className="contact">
                    <p>Contact</p>
                    <p>P : {phone}</p>
                    <p>M : {mail}</p>
                </div>
            </div>
        </div>
    )
}

export default SingleLocation
