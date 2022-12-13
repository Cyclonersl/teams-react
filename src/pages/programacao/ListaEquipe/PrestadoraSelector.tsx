import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";

import { Dropdown } from "primereact/dropdown";

import { carregarEquipes } from "../../../app/slices/equipes";
import { carregarPrestadoras, selectPrestadoras } from "../../../app/slices/prestadora";
import { PrestadoraModel } from "../../../model/Prestadora";

export function PrestadoraSelector() {
    const dispatch = useAppDispatch();

    const [selectedPrestadora, setSelectedPrestadora] = useState<PrestadoraModel>();
    const prestadoras = useAppSelector(selectPrestadoras);

    useEffect(() => {
        dispatch(carregarPrestadoras());
    }, [])

    useEffect(() => {
        if (!selectedPrestadora)
            setSelectedPrestadora(prestadoras[0]);
    }, [prestadoras])

    useEffect(() => {
        if (!selectedPrestadora)
            return;

        dispatch(carregarEquipes(selectedPrestadora.id));
    }, [selectedPrestadora])

    return (
        <Dropdown optionLabel="name"
            value={selectedPrestadora}
            options={prestadoras}
            onChange={(e) => setSelectedPrestadora(e.value)}
        />
    )
}