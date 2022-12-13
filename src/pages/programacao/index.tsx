import { ListaEquipe } from "./ListaEquipe";
import { Mapa } from "./Mapa";
import { BlockLoading } from "./Loading";
import { SideBarPendentes } from "./SideBarPendentes";

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
                <SideBarPendentes />
                <div className={`flex-1`}>
                    <Mapa key="mapa_component" />
                    <ListaEquipe />
                </div>
            </div >

        </>
    )
}

export { ProgramacaoScreen }