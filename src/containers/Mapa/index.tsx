import L from 'leaflet'

import { MapContainer, TileLayer, } from 'react-leaflet'

import { useAppSelector } from '../../app/hooks';
import { selectEquipesIdsPreferencia } from '../../app/slices/equipes';
import { Veiculo } from './Veiculo';
import { Markers } from './Markers';

function Mapa() {
    const equipesIds = useAppSelector(selectEquipesIdsPreferencia);
    const center = L.latLng(-27.5969, -48.5495);

    return (
        <MapContainer center={center} zoom={12} scrollWheelZoom={true}>
            <TileLayer url="https://maps.casan.com.br/tile/{z}/{x}/{y}.png?auth_token=12345678" />
            {equipesIds.map(id => <>
                <Markers id={Number(id)} key={`markers_${id}`} />
                <Veiculo id={Number(id)} key={`carro_${id}`} />
            </>)}
        </MapContainer>
    );
}
//
export { Mapa }