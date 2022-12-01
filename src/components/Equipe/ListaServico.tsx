import { useAppSelector } from "../../app/hooks";
import { ServicoProgramado } from "../ServicoProgramado";

interface ListaServicoProps {
    id: number
}

export function ListaServico({ id }: ListaServicoProps) {
    const servicos = useAppSelector(state => state.equipes.entities[id].services);

    return <div className="grid grid-flow-row gap-2 my-2">
        {servicos?.map((servico, index) => <ServicoProgramado servico={servico} key={servico.dtHoraSoltcao + servico.nrMatriculaColaborador + "_" + index} />)}
    </div>
}