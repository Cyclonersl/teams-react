import { Button } from "primereact/button";
import { Menu } from "primereact/menu";
import { useRef } from "react";
import { FaArrowDown, FaCog, FaSave } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../app/hooks";
import { Dialogs, openDialog } from "../../app/slices/ui";
import { ServiceRoundedCounter } from "./ServiceRoundedCounter";
import { Status } from "./status";

interface EquipeHeaderProps {
    id: number;
}

export function EquipeHeader({ id }: EquipeHeaderProps) {

    const dispatch = useDispatch();
    const refMenuTeam = useRef<Menu>(null);
    const name = useAppSelector(state => state.equipes.entities[id]?.name)


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
                dispatch(openDialog(Dialogs.QRCODE))
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

    return (
        <>
            <div className="bg-casan-gray-400 border-b-1  border-casan-gray-700  p-1 shadow-[0px 0px 5px #ddd] shadow-casan-gray-600 flex justify-between">
                <div className='flex items-center'>
                    <ServiceRoundedCounter id={id} />
                    <span className="text-casan-green-800 font-bold ">{name}</span>
                    <Status id={id} />
                </div>
                <div className='flex gap-1 text-casan-green-800'>
                    <Button disabled
                        icon={<FaSave />}
                        className='w-2 h-6 flex justify-center items-center ' />

                    <Button icon={<FaArrowDown />}
                        className='w-2 h-6 flex justify-center items-center ' />
                    <Button
                        icon={<FaCog />}
                        className='w-2 h-6 flex justify-center items-center'
                        onClick={(e) => refMenuTeam.current?.toggle(e)} />
                </div>
            </div>
            <Menu model={menuItens} popup ref={refMenuTeam} />
        </>
    )

}