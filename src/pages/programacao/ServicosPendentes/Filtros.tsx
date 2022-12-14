import { Panel, PanelHeaderTemplateOptions } from 'primereact/panel'
import { Calendar } from 'primereact/calendar'
import { Dropdown } from 'primereact/dropdown'
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';

import { FaSearch } from 'react-icons/fa'

function FiltrosProgramacao() {

    const template = (options: PanelHeaderTemplateOptions) => {
        return <div className="flex justify-between bg-gradient-to-t from-casan-green-600 to-casan-green-400 border-casan-green-400 rounded-t p-2  text-white font-bold text-sm">
            Filtros
        </div>
    }

    return (
        <Panel header="Filtros" toggleable className="ml-2 my-2" >
            <div className='grid grid-cols-2 gap-1 text-sm items-center'>
                <label>Data inicial:</label>
                <Calendar className="h-[30px]" showTime />
                <label>Data Final:</label>
                <Calendar className="h-[30px]" showTime />
                <label>Tipo Abertura:</label>
                <Dropdown />
                <label>Agência:</label>
                <Dropdown />
                <label>Logradouro:</label>
                <div className='flex items-center gap-1'>
                    <div className='w-[70px]'>
                        <div className='p-inputgroup h-[30px]'>
                            <InputText />
                            <Button icon={<FaSearch />} />
                        </div>
                    </div>
                    <span className='flex-1 border-1 p-1 rounded-md'>ASD</span>
                </div>

                <label htmlFor="area-risco">Excluir Area de Risco</label>
                <Checkbox inputId="area-risco" />
                <label>Distrito Operacional:</label>
                <Dropdown />
                <label>Setor/Quadra:</label>
                <div>
                    <Dropdown />
                    <Dropdown />
                </div>
                <label>Setor Execução:</label>
                <Dropdown />
                <label>Serviços:</label>
                <a href="" className='hover:text-casan-orange-400 h-[30px] flex items-center'>Todos os serviços Selecionados</a>
                <label>Ordem:</label>
                <Dropdown />
            </div>
            <Button icon={<FaSearch />} label="Listar Solicitações" className='flex-1 font-bold w-full mt-2 h-7' />
        </Panel>
    )
}

export { FiltrosProgramacao }