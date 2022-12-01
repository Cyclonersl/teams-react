import { FaFilter } from "react-icons/fa";
import { useAppSelector } from "../../app/hooks";
import { selectEquipesIdsPreferencia } from "../../app/slices/equipes";

export function ButtonFiltrarEquipes() {

    const totalEquipes = useAppSelector(state => state.equipes.ids.length)
    const equipesIds = useAppSelector(selectEquipesIdsPreferencia)

    return (
        <a href="">
            <div className="bg-casan-gray-400 flex justify-between border-1 border-white pr-1 items-center h-7">
                <span className="bg-casan-green-200 py-2 px-3 mr-2 text-ssm text-white">
                    <FaFilter />
                </span>
                {
                    equipesIds.length === equipesIds.length ?
                        <span className="text-12 font-bold">Filtrar Equipes</span>
                        :
                        <span className="text-12 font-bold">{equipesIds.length} / {totalEquipes} selecionadas</span>
                }

            </div>
        </a>
    )
}