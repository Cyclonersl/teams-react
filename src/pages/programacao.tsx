import { useEffect, useState } from "react";

import { Button } from "primereact/button"
import { Sidebar } from 'primereact/sidebar'
import { BlockUI } from 'primereact/blockui'
import { Card } from 'primereact/card'
import { ProgressSpinner } from 'primereact/progressspinner';

import { FiltrosProgramacao } from "../containers/ServicosPendentes/filtros";
import { ListaEquipe } from "../containers/ListaEquipe";
import { Mapa } from "../containers/Mapa";
import { ServicosPendentes } from "../containers/ServicosPendentes";
import { useAppSelector } from "../app/hooks";

import { FaCalendarPlus, FaCheckCircle } from "react-icons/fa";
import { BlockLoading } from "../containers/BlockLoading";

const items = [
    {
        label: 'Programar',
        icon: 'pi pi-pencil',
        command: () => {
        }
    }
];

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


function ProgramacaoScreen() {

    const [openProgramacao, setOpenProgramacao] = useState<boolean>(false);

    return (
        <>
            <BlockLoading />
            <div className="mx-2 mt-2 gap-2">
                <div className="flex">
                    <img src="https://traefik.casan.com.br/static/imagens/casan.svg" width={45} />
                    <img src="https://traefik.casan.com.br/static/imagens/novo_domo.svg" width={180} />
                </div>
            </div>
            <div className="flex">
                <div className="mt-2 ml-2 p-2 rounded-md bg-casan-green-600 h-screen sticky top-0">
                    <Button
                        icon={<FaCalendarPlus />}
                        onClick={() => setOpenProgramacao(true)}
                        tooltip="Programar Serviços" />
                </div>
                <div className={`flex-1`}>
                    <Mapa />
                    <ListaEquipe />
                </div>
            </div >

            <Sidebar visible={openProgramacao} position="left" className="p-sidebar-md" onHide={() => setOpenProgramacao(false)}>
                <FiltrosProgramacao />
                <ServicosPendentes />
            </Sidebar>

        </>
    )
}

export { ProgramacaoScreen }