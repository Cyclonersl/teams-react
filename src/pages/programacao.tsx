

import { FiltrosProgramacao } from "../containers/ServicosPendentes/filtros";
import { ListaEquipe } from "../containers/ListaEquipe";
import { Mapa } from "../containers/Mapa";
import { ServicosPendentes } from "../containers/ServicosPendentes";

function ProgramacaoScreen() {
    return <div className="flex">
        <div className="max-w-lg">
            <FiltrosProgramacao />
            <ServicosPendentes />
        </div>
        <div className="flex-1">
            <Mapa />
            <ListaEquipe />
        </div>
    </div>

}

export { ProgramacaoScreen }