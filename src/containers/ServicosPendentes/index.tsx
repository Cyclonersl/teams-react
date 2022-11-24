import { Panel, PanelHeaderTemplateOptions } from 'primereact/panel'

interface ServicosPendentesProps {

}

function ServicosPendentes({ }: ServicosPendentesProps) {
    const template = (options: PanelHeaderTemplateOptions) => {
        return <div className="flex justify-between bg-gradient-to-t from-casan-green-600 to-casan-green-400 border-casan-green-400 rounded-t p-2  text-white font-bold text-sm">
            <span>
                Serviços Pendentes
            </span>
        </div>
    }

    return <Panel headerTemplate={template}></Panel>
}

export { ServicosPendentes }