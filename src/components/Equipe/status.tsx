interface StatusProps {
    type: string
}

function Status({ type }: StatusProps) {

    if (type == 'deslogado')
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