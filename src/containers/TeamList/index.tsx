import { useEffect, useState } from "react";
import { ServiceProvider } from "../../model/ServiceProvider";
import { TeamControlling } from "../../model/TeamControlling";

interface TeamListProps {
    serviceProvider?: ServiceProvider;
}

function TeamList({ serviceProvider }: TeamListProps) {

    const [teams, setTeams] = useState<TeamControlling[]>([]);
    const [dataLoading, setDataLoading] = useState<boolean>(false);

    useEffect(() => {
        setDataLoading(true);
        setDataLoading(false);
    }, [serviceProvider])

    if (dataLoading)
        <h1>Loading...</h1>

    return <div>
        <div>Cabeçalho</div>
        TeamList
    </div>

}

export { TeamList }