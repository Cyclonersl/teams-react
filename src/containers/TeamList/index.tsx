import { useEffect, useRef, useState } from "react";

import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { Panel, PanelHeaderTemplateOptions } from 'primereact/panel'
import { Menu, MenuProps } from 'primereact/menu';

import { Team } from "../../components/Team";
import { ServiceProvider } from "../../model/ServiceProvider";
import { TeamControlling } from "../../model/TeamControlling";

interface TeamListProps {
}

function TeamList({ }: TeamListProps) {

    const [selectedServiceProvider, setSelectedServiceProvider] = useState<ServiceProvider>();
    const [serviceProviders, setServiceProviders] = useState<ServiceProvider[]>([]);
    const [teams, setTeams] = useState<TeamControlling[]>([]);
    const [dataLoading, setDataLoading] = useState<boolean>(false);
    const refMenuTeamList = useRef<Menu>(null);

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

    const loadServiceProviderData = async () => {
        setServiceProviders([{ id: 1, name: "Prestadora 1" }, { id: 2, name: "Prestadora 2" }]);
        setSelectedServiceProvider({ id: 1, name: "Prestadora 1" })
    }

    useEffect(() => {
        loadServiceProviderData();
    }, [])

    useEffect(() => {
        if (!selectedServiceProvider)
            return;

        setDataLoading(true);
        setTeams([
            {
                id: 1,
                name: 'Equipe 1',
                color: '#c2e1f6',
                status: 'online'
            },
            {
                id: 2,
                name: 'Equipe 2',
                color: '#5d6c76',
                status: 'offline'
            },
            {
                id: 3,
                name: 'Equipe 3',
                color: '#735d76',
                status: 'deslogado'
            }
        ]);

        setDataLoading(false);
    }, [selectedServiceProvider])

    if (dataLoading)
        <h1>Loading...</h1>

    const headerTemplate = (options: PanelHeaderTemplateOptions) => {
        return (<div className="flex justify-between bg-gradient-to-t from-casan-green-600 to-casan-green-400 border-casan-green-400 rounded-t p-1 h-9">
            <Dropdown optionLabel="name"
                value={selectedServiceProvider}
                options={serviceProviders}
                onChange={(e) => setSelectedServiceProvider(e.value)}

            />
            <div className="bg-casan-gray-400 flex justify-between border-1 border-white pr-1 items-center h-7">
                <span className="pi pi-filter bg-casan-green-200 py-2 px-3 mr-2 text-ssm" />
                <span className="text-12 font-bold">3 / 102 selecionadas</span>
            </div>

            <Button onClick={(e) => refMenuTeamList.current?.toggle(e)}>
                <span className="pi pi-cog" />
            </Button>

        </div>)
    }

    return <>
        <Panel headerTemplate={headerTemplate} className="m-2">
            <div className="flex flex-wrap gap-2">
                {teams.map(team => <Team team={team} key={team.id} />)}
            </div>
        </Panel>

        <Menu model={menuItens} popup ref={refMenuTeamList} />
    </>







}

export { TeamList }