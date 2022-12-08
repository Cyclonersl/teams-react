import { useAppSelector } from "../../app/hooks";
import { equipeAdapter } from "../../app/slices/equipes";

interface StatusProps {
    id: number
}

function Status({ id }: StatusProps) {

    const type = useAppSelector(state => equipeAdapter.getSelectors().selectById(state.equipes, id)?.status)

    if (!type || type === 'deslogado')
        return null;

    const color = type == 'online' ? 'bg-casan-online-400' : 'bg-casan-offline-400'
    const text = type == 'online' ? 'Online' : 'Offline'

    return <>
        <span className='bg-casan-logada-400 text-[12px] text-white px-2 rounded-sm m-[2px] font-bold'>
            Logada
        </span>
        <span className={`${color} text-[12px] text-white px-2 rounded-sm m-[2px] font-bold`}>
            {text}
        </span>
    </>
}

export { Status }