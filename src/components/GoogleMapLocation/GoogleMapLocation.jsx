import React, { useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Tooltip } from 'react-leaflet'
import L from 'leaflet';

const defaultIcon = new L.Icon({
    iconUrl: '../../assets/map_marker.png', // Update with the correct path
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
});

const GoogleMapLocation = () => {

    useEffect(() => {
        const map = document.querySelector('.leaflet-container');
        if (map) {
            map.addEventListener('click', () => {
                map.scrollIntoView({ behavior: 'smooth', block: 'center' });
            });
        }
    }, []);

    return (
        <MapContainer
            className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]"
            center={[-6.2550064, 106.8501041]}
            zoom={16}
            scrollWheelZoom={true}
        >
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[-6.2550064, 106.8501041]}>
                <Tooltip direction="top" offset={[0, -10]} opacity={1} permanent>
                    Balai Makarti Muktitama
                </Tooltip>
            </Marker>
        </MapContainer>
    )
}

export default GoogleMapLocation
