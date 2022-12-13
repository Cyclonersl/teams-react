import { useAppSelector } from "../../../app/hooks"

interface ServiceRoundedCounterProps {
    id: number;
}

export function ServiceRoundedCounter({ id }: ServiceRoundedCounterProps) {

    const count = useAppSelector(state => state.equipes.entities[id]?.services?.length)
    const color = useAppSelector(state => state.equipes.entities[id]?.color)

    return (
        <div className="w-6 h-6 text-white rounded-full flex items-center justify-center text-ssm mr-1" style={{ backgroundColor: color }}>
            {count}
        </div>
    )
}