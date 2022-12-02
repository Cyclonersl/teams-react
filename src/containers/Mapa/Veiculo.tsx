import { useAppDispatch, useAppSelector } from "../../app/hooks";

import L from 'leaflet'
import { markerCarro } from "./MarkerCarro";
import { Marker } from "react-leaflet";
import { useCallback, useEffect, useState } from "react";
import { localizacaoUpdate } from "../../app/slices/localizacoes";

interface VeiculoProps {
    id: number;
}

export function Veiculo({ id }: VeiculoProps) {

    /* const dispatch = useAppDispatch();
 
     const localizacoes = [
         { id: 1, lat: -27.64, lng: -48.525 },
         { id: 1, lat: -27.5969, lng: -48.52 },
         { id: 1, lat: -27.5969, lng: -48.60 }
     ]
 
     const [index, setIndex] = useState(0);
 
     useEffect(() => {
         dispatch(localizacaoUpdate(localizacoes[index]));
         setTimeout(() => {
             const next = index == 2 ? 0 : index + 1;
             setIndex(next);
         }, 2000);
     }, [index])
 */
    const cor = useAppSelector(state => state.equipes.entities[id]?.color);
    /* const localizacao = useAppSelector(state => state.localizacoes?.entities[id]);
 
     if (!cor || !localizacao)
         return null;
 */
    return null;
    /*<Marker
        position={L.latLng(localizacao.lat, localizacao.lng)}
        icon={markerCarro({ cor })}>
    </Marker>*/
}