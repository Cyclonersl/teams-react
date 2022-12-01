import { useRef } from "react";

import { Button } from 'primereact/button';
import { Panel, PanelHeaderTemplateOptions } from 'primereact/panel'
import { Menu } from 'primereact/menu';

import { Equipe } from "../../components/Equipe";

import { FaCog } from "react-icons/fa";
import { useAppSelector } from "../../app/hooks";

import { PrestadoraSelector } from "./PrestadoraSelector";
import { ButtonFiltrarEquipes } from "./ButtonFiltrarEquipes";

import { selectEquipesIdsPreferencia } from "../../app/slices/equipes";

interface ListaEquipeProps {
}

function ListaEquipe({ }: ListaEquipeProps) {

    const equipesIds = useAppSelector(selectEquipesIdsPreferencia)
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

    const headerTemplate = (options: PanelHeaderTemplateOptions) => {
        return (
            <div className="flex justify-between bg-gradient-to-t from-casan-green-600 to-casan-green-400 border-casan-green-400 rounded-t p-1 h-9">
                <PrestadoraSelector />
                <ButtonFiltrarEquipes />
                <Button icon={<FaCog />} onClick={(e) => refMenuListaEquipe.current?.toggle(e)} />
            </div>)
    }

    return <>
        <Panel headerTemplate={headerTemplate} className="m-2">
            <div className="flex flex-wrap gap-2">
                {equipesIds.map((id, index) => <Equipe id={id as number} key={`EQUIPE_${id}`} />)}
            </div>
        </Panel>

        <Menu model={menuItens} popup ref={refMenuListaEquipe} />
    </>

}

export { ListaEquipe }