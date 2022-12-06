import L from 'leaflet'

import { MapContainer, TileLayer, } from 'react-leaflet'


import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectEquipesIdsPreferencia } from '../../app/slices/equipes';
import { Veiculo } from './Veiculo';
import { Markers } from './Markers';
import { useEffect } from 'react';
import SocketClient from '../../app/socket';
import { localizacaoUpdate } from '../../app/slices/localizacoes';

function Mapa() {
    const dispatch = useAppDispatch();
    const equipesIds = useAppSelector(selectEquipesIdsPreferencia);
    const center = L.latLng(-27.5969, -48.5495);

    useEffect(() => {
        SocketClient.getInstance().on('equipe/localizacao', (data) => {
            dispatch(localizacaoUpdate(data));
        })
    }, [])

    return (
        <MapContainer center={center} zoom={12} scrollWheelZoom={true} key="mapa">
            <TileLayer url="https://maps.casan.com.br/tile/{z}/{x}/{y}.png?auth_token=12345678" key="tileLayer" />
            {equipesIds.map(id => <>
                <Markers id={Number(id)} key={`markers_${id.toString()}`} />
                <Veiculo id={Number(id)} key={`carro_${id.toString()}`} />
            </>)}
        </MapContainer>
    );
}
//
export { Mapa }