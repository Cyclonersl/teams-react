import { FaHome, FaInfoCircle, FaFileImage, FaComment, FaCodeBranch, FaLink, FaTimes, FaRegSquare, FaMapMarkerAlt } from "react-icons/fa"

import { ServicoProgramadoModel } from "../../../model/ServicoProgramado"

import TagCodigoServico from "../TagCodigoServico";

interface ServicoProgramadoProps {
    servico: ServicoProgramadoModel;
}

function ServicoProgramado({ servico }: ServicoProgramadoProps) {

    let situacaoColor = servico.situacao === "PROGRAMADA" ? "bg-casan-programado-400" :
        servico.situacao === "EM_ROTA" ? "bg-casan-emrota-400" :
            servico.situacao === "EXECUTANDO" ? "bg-casan-executando-400" :
                "bg-casan-gray-400";

    const situacaoDesc = servico.situacao.replace("_", " ")

    return (
        <div className="bg-casan-gray-400 p-2 text-sm">
            <div className={`${situacaoColor} text-white  flex justify-between items-center p-1`}>
                <div className="flex items-center justify-center text-sm">
                    {servico.situacao === "PROGRAMADA" && <FaRegSquare className="mr-1" />}
                    <span className="text-sm mr-1">{situacaoDesc}</span>
                    <div className="flex items-center justify-center gap-1">
                        <FaInfoCircle />
                        <FaFileImage />
                        <FaComment />
                        <FaCodeBranch />
                    </div>
                </div>
                {servico.situacao === "PROGRAMADA" ? <FaTimes /> : null}
            </div>
            <div className="text-sm">
                <div className="flex items-center gap-1/2">
                    <FaHome className="mr-1" />
                    <a href="/" className="hover:text-casan-orange-400">
                        <FaMapMarkerAlt />
                    </a>
                    <a href="/" className="flex items-center gap-1 hover:text-casan-orange-400">
                        <span>{`${servico.dtHoraSoltcao} ${servico.nrMatriculaColaborador}`}</span>
                        <FaLink />
                    </a>
                </div>
                <div className="text-casan-gray-500 text-[12px]">
                    <div className="flex items-center gap-1">
                        <TagCodigoServico codigo={servico.codigoServico} />
                        {servico.descricaoServico}
                    </div>
                    <div className="flex">
                        {`${servico.agencia} - ${servico.distritoOperacional}`}
                    </div>
                    <div>
                        {servico.endereco}
                    </div>
                    <div className="flex items-center text-[11px] gap-1">
                        <span className="font-bold">Tempo desde a ??ltima programa????o para a equipe:</span>
                        <span>1D 11:00</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { ServicoProgramado }