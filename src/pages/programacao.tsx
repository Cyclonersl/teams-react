import { ListaEquipe } from "../containers/ListaEquipe";
import { Mapa } from "../containers/Mapa";
import { BlockLoading } from "../containers/BlockLoading";
import { SideProgramacao } from "../containers/SideProgramacao";

function ProgramacaoScreen() {

    return (
        <>
            <BlockLoading />
            <div className="mx-2 mt-2 gap-2">
                <div className="flex">
                    <img src="https://traefik.casan.com.br/static/imagens/casan.svg" width={45} />
                    <img src="https://traefik.casan.com.br/static/imagens/novo_domo.svg" width={180} />
                </div>
            </div>
            <div className="flex">
                <SideProgramacao />
                <div className={`flex-1`}>
                    <Mapa key="mapa_component" />
                    <ListaEquipe />
                </div>
            </div >

        </>
    )
}

export { ProgramacaoScreen }