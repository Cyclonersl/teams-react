import { useRef } from 'react';

import { Map } from 'leaflet';
import { MapContainer, TileLayer, useMap } from 'react-leaflet'

function Mapa() {

    const map = useRef<Map>(null)

    return (
        <MapContainer center={[-27.5969, -48.5495]} zoom={12} scrollWheelZoom={true} ref={map}>
            <TileLayer url="https://maps.casan.com.br/tile/{z}/{x}/{y}.png?auth_token=12345678" />
        </MapContainer>
    );
}

export { Mapa }