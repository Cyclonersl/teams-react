interface TagCodigoServicoProps {
    codigo: number;
}

function TagCodigoServico({ codigo }: TagCodigoServicoProps) {
    return (
        <span className="px-1 bg-casan-orange-400 text-white font-bold rounded-md">
            {codigo}
        </span>
    );
}

export default TagCodigoServico;