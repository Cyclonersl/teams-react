interface QuantidadeSituacaoServicoProps {
    valor: number;
    situacao: 'EXECUTADO' | 'RECUSADO';
}

function QuantidadeSituacaoServico({ valor, situacao }: QuantidadeSituacaoServicoProps) {
    const color = {
        "EXECUTADO": 'bg-casan-executado-400',
        "RECUSADO": 'bg-casan-recusado-400',
    };

    return (
        <span className={`flex-1 text-center ${color[situacao]} py-3 rounded-md text-white font-bold`}>
            {`${valor} ${situacao}${valor > 1 ? 'S' : ''}`}
        </span>
    )
}

export default QuantidadeSituacaoServico;