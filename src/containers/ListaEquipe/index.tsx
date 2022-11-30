import { useEffect, useMemo, useRef, useState } from "react";

import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { Panel, PanelHeaderTemplateOptions } from 'primereact/panel'
import { Menu } from 'primereact/menu';

import { Equipe } from "../../components/Equipe";
import { PrestadoraModel } from "../../model/Prestadora";

import { FaCog, FaFilter } from "react-icons/fa";
import { useAppSelector } from "../../app/hooks";

import { PrestadoraSelector } from "./PrestadoraSelector";

interface ListaEquipeProps {
}

function ListaEquipe({ }: ListaEquipeProps) {

    const preferencias = useAppSelector(state => state.equipes.preferencia)
    const equipesIds = useAppSelector(state => state.equipes.ids)
    const equipes = useAppSelector(state => state.equipes.entities)

    const refMenuListaEquipe = useRef<Menu>(null);

    const menuItens = [
        {
            label: 'Resumo programação',
            icon: 'pi pi-book',
            command: () => {
                alert('click');
            }
        },
        {
            label: 'Minimizar equipes',
            icon: 'pi pi-window-minimize',
            command: () => {
                alert('click');
            }
        },
        {
            label: 'Maximizar equipes',
            icon: 'pi pi-window-maximize',
            command: () => {
                alert('click');
            }
        },
        {
            label: 'Esconder solicitações',
            icon: 'pi pi-map-marker',
            command: () => {
                alert('click');
            }
        },
        {
            label: 'Mostrar solicitações',
            icon: 'pi pi-map-marker',
            command: () => {
                alert('click');
            }
        },
        {
            label: 'Enquadrar solicitações',
            icon: 'pi pi-map',
            command: () => {
                alert('click');
            }
        }
    ]

    const filtrarEquipes = () => {
        const preferenciaSelecionada = preferencias?.selecionada;

        if (!preferenciaSelecionada)
            return equipesIds;

        const preferenciaData = preferencias.preferencias.find(preferencia => preferencia.nome === preferenciaSelecionada);

        if (!preferenciaData)
            return equipesIds;

        return equipesIds.filter(id => preferenciaData.equipes.includes(id));
    }

    const equipesIdsFiltradas = useMemo(() => filtrarEquipes(), [preferencias]);

    const headerTemplate = (options: PanelHeaderTemplateOptions) => {
        return (
            <div className="flex justify-between bg-gradient-to-t from-casan-green-600 to-casan-green-400 border-casan-green-400 rounded-t p-1 h-9">
            <PrestadoraSelector />
            <a href="">
                <div className="bg-casan-gray-400 flex justify-between border-1 border-white pr-1 items-center h-7">
                    <span className="bg-casan-green-200 py-2 px-3 mr-2 text-ssm text-white">
                        <FaFilter />
                    </span>
                    {
                        equipesIdsFiltradas.length === equipesIds.length ?
                            <span className="text-12 font-bold">Filtrar Equipes</span>
                            :
                            <span className="text-12 font-bold">{equipesIdsFiltradas.length} / {equipesIds.length} selecionadas</span>
                    }

                </div>
            </a>

            <Button icon={<FaCog />}
                onClick={(e) => refMenuListaEquipe.current?.toggle(e)} />

        </div>)
    }

    return <>
        <Panel headerTemplate={headerTemplate} className="m-2">
            <div className="flex flex-wrap gap-2">
                {
                    equipesIds.map((chave, index) =>
                        <Equipe equipe={equipes[chave]} key={chave + "_ " + index} />
                    )
                }
            </div>
        </Panel>

        <Menu model={menuItens} popup ref={refMenuListaEquipe} />
    </>

}

export { ListaEquipe }