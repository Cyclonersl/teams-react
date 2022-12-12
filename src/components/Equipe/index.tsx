import { Panel } from 'primereact/panel';
import { Button } from 'primereact/button';

import { FaArrowUp, FaSave } from "react-icons/fa"

import { ListaServico } from './ListaServico';
import { EquipeHeader } from './EquipeHeader';
import { memo, MutableRefObject, useEffect, useRef } from 'react';
import { carregarServicos } from '../../app/slices/equipes';
import { useAppDispatch } from '../../app/hooks';
import { Modals } from '../../containers/Modals';

import { QuantidadesExecutadosRecusados } from './QuantidadesExecutadosRecusados';

interface ListaEquipeProps {
    id: number
}

const Equipe = memo(function Equipe({ id }: ListaEquipeProps) {
    const dispatch = useAppDispatch();
    const refHeader = useRef<any>(null);
    const refSalvar = useRef<any>(null);

    useEffect(() => {
        dispatch(carregarServicos(id));
    }, [id])

    return <>
        <Panel headerTemplate={() => <EquipeHeader ref={refHeader} id={id} refSalvar={refSalvar} />} className="flex-1 min-w-[390px]">
            <QuantidadesExecutadosRecusados id={id} />
            <ListaServico id={id} />
            <div className='flex gap-2'>
                <Button ref={refSalvar} disabled icon={<FaSave />} iconPos='left' label='Salvar' className='flex-1 font-bold' />
                <Button id={`button-down-${id}`} icon={<FaArrowUp />} className='flex-2' onClick={() => refHeader?.current?.scrollIntoView()} />
            </div>
        </Panel>

        <Modals />
    </>
})

export { Equipe }