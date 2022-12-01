import { useEffect, useRef } from 'react';

import { Map } from 'leaflet';
import { MapContainer, TileLayer, useMap } from 'react-leaflet'
import { useLeafletContext } from '@react-leaflet/core'
import { useAppSelector } from '../../app/hooks';
import { selectEquipesIdsPreferencia, selectServicosEquipe } from '../../app/slices/equipes';
import { EntityId } from '@reduxjs/toolkit';
import L from 'leaflet'

interface MarkersProps {
    id: number;
}

function Markers({ id }: MarkersProps) {
    const context = useLeafletContext()
    const equipe = useAppSelector(state => state.equipes.entities[id]);

    useEffect(() => {

        if (!equipe?.services)
            return

        equipe?.services.forEach(servico => {
            const latLng = L.latLng(servico.coordenadas.lat, servico.coordenadas.lng);

            const bounds = L.latLng(latLng).toBounds(1000)
            const square = new L.marker(latLng, {
                icon: new L.NumberedDivIcon(),
                draggable: false,
                riseOnHover: true,
                equipe_id: equipe.id
            });
            const container = context.layerContainer || context.map
            container.addLayer(square)

            return () => {
                container.removeLayer(square)
            }
        })


    }, [equipe])

    return null;
}

function Mapa() {

    const map = useRef<Map>(null)
    const equipesIds = useAppSelector(selectEquipesIdsPreferencia);
    //const equipes = useAppSelector(state => state.equipes.entities);
    const center = L.latLng(-27.5969, -48.5495);

    return (
        <MapContainer center={center} zoom={12} scrollWheelZoom={true} ref={map}>
            <TileLayer url="https://maps.casan.com.br/tile/{z}/{x}/{y}.png?auth_token=12345678" />
            {equipesIds.map(id => <Markers id={Number(id)} />)}
        </MapContainer>
    );
}

export { Mapa }