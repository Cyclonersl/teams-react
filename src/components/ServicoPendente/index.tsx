import { ServicoPendenteModel } from "../../model/ServicoPendente"
import { FaHome, FaInfoCircle, FaRoad, FaRegCheckSquare, FaRegSquare, FaMapMarkerAlt } from "react-icons/fa"
import TagCodigoServico from "../TagCodigoServico"
import React from "react"

interface ServicoPendenteProps {
    servico: ServicoPendenteModel
}

function CustomLabel({ children }: { children?: React.ReactNode }) {
    return <label className="font-bold mr-1">{children}</label>
}

function CustomValue({ children }: { children?: React.ReactNode }) {
    return <span className="mr-1">{children}</span>
}

function ServicoPendente({ servico }: ServicoPendenteProps) {
    return (
        <div className="bg-casan-gray-400 p-2 text-sm mb-1">
            <div className="flex items-center justify-between text-[#333333] opacity-50 bg-white p-1">
                <div className="flex items-center gap-1">
                    <FaRegSquare />
                    <FaHome />
                    <span className="flex items-center font-bold">
                        {servico.dtHoraSoltcao}
                    </span>
                </div>
                <div className="flex gap-1">
                    <FaInfoCircle />
                    <FaMapMarkerAlt />
                </div>
            </div>
            <div className="text-casan-gray-500 text-[12px]">
                <div className="flex items-center gap-1 mt-1">
                    <TagCodigoServico codigo={servico.codigoServico} />
                    {servico.descricaoServico}
                </div>
                <div className="flex">
                    {`${servico.agencia} - ${servico.distritoOperacional}`}
                </div>
                <div>
                    {servico.endereco}
                </div>
                <div>
                    <CustomLabel>Hidrômetro:</CustomLabel>
                    <CustomValue>A19N211346</CustomValue>
                    <CustomLabel>/ Diâmetro:</CustomLabel>
                    <CustomValue>3/4"</CustomValue>
                </div>
                <div>
                    <CustomLabel>Localização:</CustomLabel>
                    <CustomValue>520.033.550.001</CustomValue>
                    <CustomLabel>/ Unidade:</CustomLabel>
                    <CustomValue>732752-8</CustomValue>
                </div>
                <div>
                    <CustomLabel>Valor Devido:</CustomLabel>
                    <CustomValue>R$ 1.048,65</CustomValue>
                </div>
            </div>

        </div >
    )
}

export { ServicoPendente }