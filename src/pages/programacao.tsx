import { useState } from "react";

import { Button } from "primereact/button"
import { SpeedDial } from 'primereact/speeddial';
import { Tooltip } from 'primereact/tooltip'

import { FiltrosProgramacao } from "../containers/ServicosPendentes/filtros";
import { ListaEquipe } from "../containers/ListaEquipe";
import { Mapa } from "../containers/Mapa";
import { ServicosPendentes } from "../containers/ServicosPendentes";


const items = [
    {
        label: 'Programar',
        icon: 'pi pi-pencil',
        command: () => {
        }
    }
];


function ProgramacaoScreen() {

    return (
        <>
            <div className="mx-2 mt-2 gap-2">
                <div className="flex">
                    <img src="https://traefik.casan.com.br/static/imagens/casan.svg" width={45} />
                    <img src="https://traefik.casan.com.br/static/imagens/novo_domo.svg" width={180} />
                </div>
            </div>
            <div className="flex">
                <div className={`h-full top-0 p-2 max-w-lg bg-white z-50 overflow-auto lg:h-fit lg:block lg:p-0`}>
                    <FiltrosProgramacao />
                    <ServicosPendentes />
                </div>
                {/*<div className="w-9 m-2 border-1 rounded-md h-[calc(100vh_-_65px)] bg-casan-gray-400 border-casan-gray-500">

                </div> */}
                <div className={`flex-1`}>
                    <Mapa />
                    <ListaEquipe />
                </div>
            </div >

        </>
    )
}

export { ProgramacaoScreen }