import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import 'leaflet/dist/leaflet.css';

import '../styles/SingleLocation.scss'

function SingleLocation({ name, office, address, coordinates, phone,mail }) {
    let markerIcon = L.icon({
        iconUrl: icon,
        shadowUrl: iconShadow
    });

    return (
        <div className="location">
            <MapContainer
                center={coordinates}
                zoom={13}
                scrollWheelZoom={false}
            >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
           <Marker position={coordinates} icon={markerIcon}>
                <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
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
