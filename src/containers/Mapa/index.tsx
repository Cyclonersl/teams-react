import { useCallback, useEffect, useRef } from 'react';

import { Map } from 'leaflet';
import { LayerGroup, MapContainer, Marker, Popup, TileLayer, } from 'react-leaflet'

import { useAppSelector } from '../../app/hooks';
import { selectEquipesIdsPreferencia } from '../../app/slices/equipes';
import { markerServico } from './MarkerServico';

import L from 'leaflet'
import { Veiculo } from './Veiculo';

interface MarkersProps {
    id: number;
}

function Markers({ id }: MarkersProps) {

    const servicos = useAppSelector(state => state.equipes.entities[id]?.services);
    const corFundo = useAppSelector(state => state.equipes.entities[id]?.color);

    if (!servicos || !corFundo)
        return null;


    return <LayerGroup>
        {
            servicos.map((servico, index) =>
                <Marker
                    position={L.latLng(servico.coordenadas.lat, servico.coordenadas.lng)}
                    icon={markerServico({
                        corFundo,
                        numero: index + 1,
                        corFonte: '#FFFFFF',
                        situacao: servico.situacao
                    })}
                    key={`marker_${id}_${index}`}
                >
                    <Popup >
                        {`${servico.dtHoraSoltcao}`}
                        <br />
                        {`Lat: ${servico.coordenadas.lat}`}
                        <br />
                        {`Lng: ${servico.coordenadas.lng}`}
                    </Popup>
                </Marker>
            )
        }


    </LayerGroup>;
}

function Mapa() {

    const map = useRef<Map>(null)
    const equipesIds = useAppSelector(selectEquipesIdsPreferencia);
    //const equipes = useAppSelector(state => state.equipes.entities);
    const center = L.latLng(-27.5969, -48.5495);

    return (
        <MapContainer center={center} zoom={12} scrollWheelZoom={true} ref={map}>
            <TileLayer url="https://maps.casan.com.br/tile/{z}/{x}/{y}.png?auth_token=12345678" />
            {equipesIds.map(id => <>
                <Markers id={Number(id)} key={`markers_${id}`} />
                <Veiculo id={Number(id)} />
            </>)}
        </MapContainer>
    );
}

export { Mapa }