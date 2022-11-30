import { Dropdown } from "primereact/dropdown";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { carregarEquipes } from "../../app/slices/equipes";
import { carregarPrestadoras } from "../../app/slices/prestadora";
import { PrestadoraModel } from "../../model/Prestadora";

export function PrestadoraSelector() {
    const dispatch = useAppDispatch();

    const [selectedPrestadora, setSelectedPrestadora] = useState<PrestadoraModel>();
    const prestadorasIds = useAppSelector(state => state.prestadoras.ids)
    const prestadoras = useAppSelector(state => state.prestadoras.lista)

    useEffect(() => {
        dispatch(carregarPrestadoras());
    }, [])

    useEffect(() => {
        if (!selectedPrestadora)
            setSelectedPrestadora(prestadoras[prestadorasIds[0]]);
    }, [prestadoras])

    useEffect(() => {
        if (!selectedPrestadora)
            return;

        dispatch(carregarEquipes(selectedPrestadora.id));
    }, [selectedPrestadora])

    return (
        <Dropdown optionLabel="name"
                value={selectedPrestadora}
                options={prestadorasIds.map(chave => prestadoras[chave])}
                onChange={(e) => setSelectedPrestadora(e.value)}

            />
    )
}