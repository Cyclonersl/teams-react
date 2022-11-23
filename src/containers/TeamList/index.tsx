import { useEffect, useRef, useState } from "react";

import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { Panel, PanelHeaderTemplateOptions } from 'primereact/panel'
import { Menu } from 'primereact/menu';

import { Team } from "../../components/Team";
import { ServiceProvider } from "../../model/ServiceProvider";
import { TeamControlling } from "../../model/TeamControlling";

import serviceProviderData from '../../data/service-provider.json';
import { teamsData } from '../../data/teams-data'
import { FaCog } from "react-icons/fa";

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
        setServiceProviders(serviceProviderData);
        setSelectedServiceProvider(serviceProviderData[0])
    }

    useEffect(() => {
        loadServiceProviderData();
    }, [])

    useEffect(() => {
        if (!selectedServiceProvider)
            return;

        setDataLoading(true);
        setTeams(teamsData);

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

            <Button icon={<FaCog />} onClick={(e) => refMenuTeamList.current?.toggle(e)} />

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