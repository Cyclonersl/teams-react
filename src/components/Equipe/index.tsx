import { Panel } from 'primereact/panel';
import { Button } from 'primereact/button';

import { FaArrowUp, FaSave } from "react-icons/fa"

import { ListaServico } from './ListaServico';
import QuantidadeSituacaoServico from '../QuantidadeSituacaoServico';
import { EquipeHeader } from './EquipeHeader';
import { memo, useEffect } from 'react';
import { carregarServicos } from '../../app/slices/equipes';
import { useAppDispatch } from '../../app/hooks';
import { Modals } from '../../containers/Modals';

interface ListaEquipeProps {
    id: number
}

const Equipe = memo(function Equipe({ id }: ListaEquipeProps) {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(carregarServicos(id));
    }, [id])

    return <>
        <Panel headerTemplate={() => <EquipeHeader id={id} />} className="flex-1 min-w-[390px]">
            <div className='flex gap-2'>
                <QuantidadeSituacaoServico valor={1} situacao="EXECUTADO" />
                <QuantidadeSituacaoServico valor={3} situacao="RECUSADO" />
            </div>
            <ListaServico id={id} />
            <div className='flex gap-2'>
                <Button disabled icon={<FaSave />} iconPos='left' label='Salvar' className='flex-1 font-bold' />
                <Button icon={<FaArrowUp />} className='flex-2' />
            </div>
        </Panel>

        <Modals />
    </>
})

export { Equipe }