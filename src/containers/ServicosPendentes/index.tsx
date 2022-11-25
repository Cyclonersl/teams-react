import { useEffect, useState } from 'react'

import { Button } from 'primereact/button'

import { FaCog } from 'react-icons/fa'

import { ServicoPendenteModel } from '../../model/ServicoPendente'
import { servicosPendenteData } from '../../data/servico-pendente'
import { ServicoPendente } from '../../components/ServicoPendente';

interface ServicosPendentesProps {

}

function ServicosPendentes({ }: ServicosPendentesProps) {

    const [servicos, setServicos] = useState<ServicoPendenteModel[]>([]);

    useEffect(() => {
        setServicos(servicosPendenteData);
    }, [])

    return (
        <div className="ml-2 relative">
            <div className="flex h-9 justify-between bg-gradient-to-t from-casan-green-600 to-casan-green-400 border-casan-green-400 rounded-t p-1 pl-2 text-white font-bold" >
                <span className='text-sm flex items-center'>
                    Serviços Pendentes
                </span>
                <Button icon={<FaCog />} />
            </div>
            <div className="overflow-auto h-[calc(100vh_-_theme(spacing[9]))] p-2 rounded-b-md border-1 ">
                {servicos.map((servico, i) => <ServicoPendente servico={servico} key={servico.dtHoraSoltcao + servico.nrMatriculaColaborador + i} />)}
            </div>
        </div >
    )
}

export { ServicosPendentes }