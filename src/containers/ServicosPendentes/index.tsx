import { useEffect, useState } from 'react'

import { Panel, PanelHeaderTemplateOptions } from 'primereact/panel'
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

    const template = (options: PanelHeaderTemplateOptions) => {
        return <div className="flex justify-between bg-gradient-to-t from-casan-green-600 to-casan-green-400 border-casan-green-400 rounded-t p-1 pl-2 text-white font-bold h-9">
            <span className='text-sm flex items-center'>
                Serviços Pendentes
            </span>
            <Button icon={<FaCog />} />
        </div>
    }

    return (
        <Panel headerTemplate={template} className="ml-2">
            {
                servicos.map(servico => <ServicoPendente servico={servico} key={servico.dtHoraSoltcao + servico.nrMatriculaColaborador} />)
            }
        </Panel>
    )
}

export { ServicosPendentes }