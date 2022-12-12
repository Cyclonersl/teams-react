import { useSelector } from "react-redux";
import { selectQuantidadeServicosExecutados, selectQuantidadeServicosRecusados } from "../../app/slices/equipes";
import { RootState } from "../../app/store";
import QuantidadeSituacaoServico from "../QuantidadeSituacaoServico";

interface QuantidadesExecutadosRecusadosProps {
    id: number
}

function QuantidadesExecutadosRecusados({ id }: QuantidadesExecutadosRecusadosProps) {
    const quantidadeExecutados = useSelector((state: RootState) => selectQuantidadeServicosExecutados(state, id));
    const quantidadeRecusados = useSelector((state: RootState) => selectQuantidadeServicosRecusados(state, id));

    return quantidadeExecutados || quantidadeRecusados ?
        <div className="flex gap-2 mb-2">
            {quantidadeExecutados ? <QuantidadeSituacaoServico valor={quantidadeExecutados} situacao="EXECUTADO" /> : null}
            {quantidadeRecusados ? <QuantidadeSituacaoServico valor={quantidadeRecusados} situacao="RECUSADO" /> : null}
        </div>
        : null;
}

export { QuantidadesExecutadosRecusados };