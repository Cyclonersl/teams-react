

import { FiltrosProgramacao } from "../containers/FiltrosProgramacao";
import { ListaEquipe } from "../containers/ListaEquipe";
import { Mapa } from "../containers/Mapa";
import { ServicosPendentes } from "../containers/ServicosPendentes";

function ProgramacaoScreen() {
    return <div className="flex">
        <div>
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