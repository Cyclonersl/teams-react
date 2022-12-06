import { useEffect, useRef, useState } from "react";

import L, { Marker } from 'leaflet'

import { useAppSelector } from "../../app/hooks";
import { useLeafletContext } from "@react-leaflet/core";
import { markerCarro } from "./MarkerCarro";

interface VeiculoProps {
    id: number;
}

export function Veiculo({ id }: VeiculoProps) {
    const cor = useAppSelector(state => state.equipes.entities[id]?.color);
    const localizacao = useAppSelector(state => state.localizacoes?.entities[id]);
    const context = useLeafletContext()
    const carroRef = useRef<Marker>();

    const container = context.layerContainer || context.map;

    const criarCarro = () => {
        if (localizacao && cor) {
            const carroLayer = L.marker(L.latLng(localizacao.geometry.coordinates[1], localizacao.geometry.coordinates[0]), {
                icon: markerCarro({
                    cor: cor
                })
            })

            carroRef.current = carroLayer;
            container.addLayer(carroLayer);
        }
    }

    useEffect(() => {
        if (localizacao && cor) {
            if (!carroRef.current)
                criarCarro();
            else {
                carroRef.current.setLatLng(L.latLng(localizacao.geometry.coordinates[1], localizacao.geometry.coordinates[0]))
            }
        }
    }, [localizacao])

    useEffect(() => {
        return () => {
            if (carroRef.current)
                container.removeLayer(carroRef.current)
        }
    }, [])

    return (null);
}