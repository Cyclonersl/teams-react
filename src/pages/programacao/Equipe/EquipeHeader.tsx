import { Button } from "primereact/button";
import { Menu } from "primereact/menu";
import React, { useRef } from "react";
import { FaArrowDown, FaCog, FaSave } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../../app/hooks";
import { selecionaEquipe, toggleServicosMapa } from "../../../app/slices/equipes";
import { Dialogs, openDialog } from "../../../app/slices/ui";
import { ServiceRoundedCounter } from "./ServiceRoundedCounter";
import { Status } from "./Status";

interface EquipeHeaderProps {
    id: number;
    refSalvar: any;
}

export const EquipeHeader = React.forwardRef(({ id, refSalvar }: EquipeHeaderProps, ref: React.LegacyRef<HTMLDivElement> | undefined) => {

    const dispatch = useDispatch();
    const refMenuTeam = useRef<Menu>(null);
    const name = useAppSelector(state => state.equipes.entities[id]?.name)


    /**
     *       {
                label: 'Atualizar Informações',
                icon: 'pi pi-sync',
                command: () => {
                    alert('click');
                }
            },
     */

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
            label: 'Identificador de Login',
            icon: 'pi pi-qrcode',
            command: () => {
                Promise.resolve(
                    dispatch(selecionaEquipe(id))
                ).then(
                    () => dispatch(openDialog(Dialogs.QRCODE))
                )
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
                dispatch(toggleServicosMapa(id));
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
            <div ref={ref} className="bg-casan-gray-400 border-b-1  border-casan-gray-700  p-1 shadow-[0px 0px 5px #ddd] shadow-casan-gray-600 flex justify-between">
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
                        id={`button-up-${id}`}
                        className='w-2 h-6 flex justify-center items-center '
                        onClick={() => refSalvar?.current?.scrollIntoView()} />
                    <Button
                        icon={<FaCog />}
                        className='w-2 h-6 flex justify-center items-center'
                        onClick={(e) => refMenuTeam.current?.toggle(e)} />
                </div>
            </div>
            <Menu model={menuItens} popup ref={refMenuTeam} />
        </>
    )

});