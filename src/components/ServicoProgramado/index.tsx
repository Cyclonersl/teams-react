import { ScheduledService } from "../../model/ScheculedService"

import { Checkbox } from 'primereact/checkbox';

interface ServicoProgramadoProps {
    servico: ScheduledService;
}

function ServicoProgramado({ servico }: ServicoProgramadoProps) {

    const situacaoColor = servico.situacao === "PROGRAMADA" ? "bg-casan-blue-400" :
        servico.situacao === "EM_ROTA" ? "bg-casan-yellow-400" :
            servico.situacao === "EXECUTANDO" ? "bg-casan-green-400" :
                "bg-casan-gray-400";

    const situacaoDesc = servico.situacao.replace("_", " ")

    return (
        <div className="bg-casan-gray-400 p-2">
            <div className={`${situacaoColor} text-white  flex justify-between items-center p-1`}>
                <div className="flex items-center justify-center">
                    <Checkbox className="mr-2" />
                    <span className="text-sm">{situacaoDesc}</span>
                    <span className="pi pi-info-circle mx-1" />
                    <span className="pi pi-images    mx-1" />
                    <span className="pi pi-comment mx-1" />
                    <span className="pi pi-share-alt mx-1" />

                </div>
                <span className="pi pi-times"></span>
            </div>
            <div className="text-sm">
                <div>
                    <a href="">
                        <span>{`${servico.dtHoraSoltcao} ${servico.nrMatriculaColaborador}`}</span>
                        <span className="pi pi-link ml-2"></span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export { ServicoProgramado }