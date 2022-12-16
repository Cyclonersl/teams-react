import { useAppSelector } from "../../../app/hooks";
import { selectServicosEquipe } from "../../../app/slices/equipes";
import { ServicoProgramado } from "../ServicoProgramado";


interface ListaServicoProps {
    id: number
}

export function ListaServico({ id }: ListaServicoProps) {
    const servicos = useAppSelector(state => selectServicosEquipe(state, id));

    return <div className="grid grid-flow-row gap-2 mb-2">
        {servicos?.map((servico, index) => <ServicoProgramado servico={servico} key={`equipe_${id}_servico_${index}`} />)}
    </div>

}