import { ReactElement, useRef } from 'react';

import { Panel, PanelHeaderTemplateOptions } from 'primereact/panel';
import { Menu } from 'primereact/menu';
import { Button } from 'primereact/button';

import { TeamControlling } from "../../model/TeamControlling";
import { Status } from './status';
import { ServicoProgramado } from '../ServicoProgramado';


interface TeamProps {
    team: TeamControlling
}

function Team({ team }: TeamProps) {
    const refMenuTeam = useRef<Menu>(null);

    const menuItens = [
        {
            label: 'Minimizar equipe',
            icon: 'pi pi-window-minimize',
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
        },
        {
            label: 'Atualizar Informações',
            icon: 'pi pi-sync',
            command: () => {
                alert('click');
            }
        },
        {
            label: 'Identificador de Login',
            icon: 'pi pi-qrcode',
            command: () => {
                alert('click');
            }
        },
        {
            label: 'Alterar Membros',
            icon: 'pi pi-users',
            command: () => {
                alert('click');
            }
        },
        {
            label: 'Desprogramar serviços',
            icon: 'pi pi-times',
            command: () => {
                alert('click');
            }
        },
        {
            label: 'Mover serviços',
            icon: 'pi pi-arrow-right-arrow-left',
            command: () => {
                alert('click');
            }
        },
        {
            label: 'Solicitações no mapa',
            icon: 'pi pi-map-marker',
            command: () => {
                alert('click');
            }
        },
        {
            label: 'Avisos de corte',
            icon: 'pi pi-file-export',
            command: () => {
                alert('click');
            }
        },
    ];

    const template = (options: PanelHeaderTemplateOptions) => {
        return (
            <div className="bg-casan-gray-400 border-b-1  border-casan-gray-700  p-1 shadow-[0px 0px 5px #ddd] shadow-casan-gray-600 flex justify-between">
                <div className='flex items-center'>
                    <div
                        className="w-6 h-6 text-white rounded-full flex items-center justify-center text-ssm mr-1"
                        style={{ backgroundColor: team.color }}>400</div>
                    <span
                        className="text-casan-green-800 font-bold ">{team.name}</span>
                    <Status
                        type={team.status} />
                </div>
                <div className='flex'>
                    <Button
                        className='w-2 h-6 flex justify-center items-center '>
                        <span
                            className="pi pi-save" />
                    </Button>
                    <Button
                        className='w-2 h-6 flex justify-center items-center '>
                        <span
                            className="pi pi-arrow-down" />
                    </Button>
                    <Button
                        className='w-2 h-6 flex justify-center items-center'
                        onClick={(e) => refMenuTeam.current?.toggle(e)}>
                        <span
                            className="pi pi-cog" />
                    </Button>
                </div>
            </div>
        )
    }

    return <>
        <Panel headerTemplate={template} className="flex-1 min-w-fit">
            <div className='flex gap-2'>
                <span className='flex-1 text-center bg-casan-green-300 py-3 rounded-md text-white font-bold'>3 EXECUTADA</span>
                <span className='flex-1 text-center bg-casan-red-200 py-3 rounded-md text-white font-bold'>1 RECUSADA</span>
            </div>
            <div className="grid grid-flow-row gap-2 my-2">
                {team.services?.map(servico => <ServicoProgramado servico={servico} />)}
            </div>
            <div className='flex gap-2'>
                <Button icon="pi pi-save" iconPos='left' label='Salvar' className='flex-1' />
                <Button icon="pi pi-arrow-up" className='flex-2' />
            </div>
        </Panel>
        <Menu model={menuItens} popup ref={refMenuTeam} />

    </>
}

export { Team }