import { useEffect, useState } from "react"

import { BlockUI } from "primereact/blockui"
import { Card } from "primereact/card"
import { ProgressSpinner } from "primereact/progressspinner"

import { FaCheckCircle } from "react-icons/fa"

import { useAppSelector } from "../../../app/hooks"

const Loading = ({ status, texto }: { status: boolean, texto: string }) => {

    return <div className="flex items-center justify-start gap-2">
        <div className="w-6 flex items-center justify-center">{
            (status) ?
                <ProgressSpinner style={{ width: '20px', height: '20px' }} /> :
                <FaCheckCircle color="green" />
        }</div>
        <span>{texto}</span>
    </div>
}




export const BlockLoading = () => {
    const [openBlock, setOpenBlock] = useState<boolean>(false);

    const carregandoPrestadora = useAppSelector(state => state.prestadoras.carregando);
    const carregandoEquipes = useAppSelector(state => state.equipes.carregandoEquipes);
    const carregandoPreferencias = useAppSelector(state => state.equipes.carregandoEquipes);
    const carregandoServicos = useAppSelector(state => state.equipes.carregandoServicos);

    useEffect(() => {
        const carregando = carregandoPrestadora || carregandoEquipes || carregandoPreferencias || carregandoServicos;
        //console.log(carregando, carregandoPrestadora, carregandoEquipes, carregandoPreferencias, carregandoServicos);
        setOpenBlock(carregando)
    }, [carregandoPrestadora, carregandoEquipes, carregandoPreferencias, carregandoServicos])

    const template = () => {
        return <Card>
            <Loading status={carregandoPrestadora} texto="Carregando Prestadoras" />
            <Loading status={carregandoEquipes} texto="Carregando Equipes" />
            <Loading status={carregandoPreferencias} texto="Carregando Preferências" />
            <Loading status={carregandoServicos} texto="Carregando Serviços" />
        </Card>
    }

    return <BlockUI template={template} blocked={openBlock} fullScreen />;
}