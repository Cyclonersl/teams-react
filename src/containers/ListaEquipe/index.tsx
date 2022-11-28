import { useEffect, useRef, useState } from "react";

import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { Panel, PanelHeaderTemplateOptions } from 'primereact/panel'
import { Menu } from 'primereact/menu';

import { Equipe } from "../../components/Equipe";
import { PrestadoraModel } from "../../model/Prestadora";
import { EquipeModel } from "../../model/Equipe";

import PrestadoraData from '../../data/service-provider.json';
import { teamsData } from '../../data/teams-data'
import { FaCog, FaFilter } from "react-icons/fa";

interface ListaEquipeProps {
}

function ListaEquipe({ }: ListaEquipeProps) {

    const [selectedPrestadora, setSelectedPrestadora] = useState<PrestadoraModel>();
    const [prestadoras, setPrestadoras] = useState<PrestadoraModel[]>([]);
    const [equipes, setEquipes] = useState<EquipeModel[]>([]);
    const [dataLoading, setDataLoading] = useState<boolean>(false);
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

    const loadPrestadoraData = async () => {
        setPrestadoras(PrestadoraData);
        setSelectedPrestadora(PrestadoraData[0])
    }

    useEffect(() => {
        loadPrestadoraData();
    }, [])

    useEffect(() => {
        if (!selectedPrestadora)
            return;

        setDataLoading(true);
        setEquipes(teamsData);

        setDataLoading(false);
    }, [selectedPrestadora])

    if (dataLoading)
        <h1>Loading...</h1>

    const headerTemplate = (options: PanelHeaderTemplateOptions) => {
        return (<div className="flex justify-between bg-gradient-to-t from-casan-green-600 to-casan-green-400 border-casan-green-400 rounded-t p-1 h-9">
            <Dropdown optionLabel="name"
                value={selectedPrestadora}
                options={prestadoras}
                onChange={(e) => setSelectedPrestadora(e.value)}

            />
            <a href="">
                <div className="bg-casan-gray-400 flex justify-between border-1 border-white pr-1 items-center h-7">
                    <span className="bg-casan-green-200 py-2 px-3 mr-2 text-ssm text-white">
                        <FaFilter />
                    </span>
                    <span className="text-12 font-bold">3 / 102 selecionadas</span>
                </div>
            </a>

            <Button icon={<FaCog />}
                onClick={(e) => refMenuListaEquipe.current?.toggle(e)} />

        </div>)
    }

    return <>
        <Panel headerTemplate={headerTemplate} className="m-2">
            <div className="flex flex-wrap gap-2">
                {equipes.map((equipe, index) => <Equipe equipe={equipe} key={equipe.id + "_ " + index} />)}
            </div>
        </Panel>

        <Menu model={menuItens} popup ref={refMenuListaEquipe} />
    </>

}

export { ListaEquipe }