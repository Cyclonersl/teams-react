import { useEffect } from 'react';
import L from 'leaflet'
import { useLeafletContext } from "@react-leaflet/core";


import { useAppSelector } from "../../../app/hooks";
import { markerServico } from './marker-svg/MarkerServico';

interface MarkersProps {
    id: number;
}

export function MarkersServicos({ id }: MarkersProps) {
    const servicos = useAppSelector(state => state.equipes.entities[id]?.services);
    const corFundo = useAppSelector(state => state.equipes.entities[id]?.color);
    const context = useLeafletContext()
    const layerGroup = L.layerGroup();

    useEffect(() => {
        const container = context.layerContainer || context.map;
        if (servicos && corFundo) {
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

        return () => {
            container.removeLayer(layerGroup);
        }
    }, [servicos])

    return null;
}