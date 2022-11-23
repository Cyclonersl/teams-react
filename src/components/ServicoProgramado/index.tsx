import { ScheduledService } from "../../model/ScheculedService"
import { RiInformationFill, RiChat3Fill, RiCheckboxBlankLine } from "react-icons/ri"
import { FaHome, FaRoad, FaInfoCircle, FaFileImage, FaComment, FaCodeBranch, FaLink, FaTimes, FaCheckSquare, FaRegCheckSquare, FaRegSquare, FaMapMarkerAlt } from "react-icons/fa"

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
        <div className="bg-casan-gray-400 p-2 text-sm">
            <div className={`${situacaoColor} text-white  flex justify-between items-center p-1`}>
                <div className="flex items-center justify-center text-sm">
                    <FaRegSquare className="mr-1" />
                    <span className="text-sm mr-1">{situacaoDesc}</span>
                    <div className="flex items-center justify-center gap-1">
                        <FaInfoCircle />
                        <FaFileImage />
                        <FaComment />
                        <FaCodeBranch />
                    </div>
                </div>
                <FaTimes />
            </div>
            <div className="text-sm">
                <div className="flex items-center gap-1/2">
                    <FaHome className="mr-1" />
                    <FaMapMarkerAlt />
                    <a href="/" className="flex items-center gap-1">
                        <span>{`${servico.dtHoraSoltcao} ${servico.nrMatriculaColaborador}`}</span>
                        <FaLink />
                    </a>
                </div>
                <div className="text-casan-gray-500 text-[12px]">
                    <div className="flex items-center gap-1">
                        <span className="px-1 bg-casan-orange-400 text-white font-bold rounded-md">{servico.codigoServico}</span>
                        {servico.descricaoServico}
                    </div>
                    <div className="flex">
                        {`${servico.agencia} - ${servico.distritoOperacional}`}
                    </div>
                    <div>
                        {servico.endereco}
                    </div>
                    <div className="flex items-center text-[11px] gap-1">
                        <span className="font-bold">Tempo desde a última programação para a equipe:</span>
                        <span>1D 11:00</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { ServicoProgramado }