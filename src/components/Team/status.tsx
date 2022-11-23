interface StatusProps {
    type: 'online' | 'offline' | 'deslogado'
}

function Status({ type }: StatusProps) {

    if (type == 'deslogado')
        return null;

    const color = type == 'online' ? 'bg-casan-green-200' : 'bg-casan-red-400'
    const text = type == 'online' ? 'Online' : 'Offline'

    return <>
        <span className='bg-casan-blue-200 text-[12px] text-white px-2 rounded-sm m-[2px] font-bold'>
            Logada
        </span>
        <span className={`${color} text-[12px] text-white px-2 rounded-sm m-[2px] font-bold`}>
            {text}
        </span>
    </>
}

export { Status }