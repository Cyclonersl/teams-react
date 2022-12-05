import L from 'leaflet'

import { useLeafletContext } from "@react-leaflet/core";
import { useAppSelector } from "../../app/hooks";
import { useEffect } from 'react';
import { markerServico } from './MarkerServico';

interface MarkersProps {
    id: number;
}

export function Markers({ id }: MarkersProps) {
    const servicos = useAppSelector(state => state.equipes.entities[id]?.services);
    const corFundo = useAppSelector(state => state.equipes.entities[id]?.color);
    const context = useLeafletContext()

    useEffect(() => {
        const container = context.layerContainer || context.map;
        if (servicos && corFundo) {
            const layerGroup = L.layerGroup();

            servicos.forEach((servico, index) => {
                const marker = L.marker(L.latLng(servico.coordenadas.lat, servico.coordenadas.lng), {
                    icon: markerServico({
                        corFundo,
                        numero: index + 1,
                        corFonte: '#FFFFFF',
                        situacao: servico.situacao
                    })
                })

                layerGroup.addLayer(marker);
            });

            container.addLayer(layerGroup);
        }
    }, [servicos])

    return null;
}