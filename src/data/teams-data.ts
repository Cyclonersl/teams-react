import { TeamControlling } from "../model/TeamControlling";

const teamsData: TeamControlling[] = [
    {
        "id": 1,
        "name": "Equipe 1",
        "color": "#c2e1f6",
        "status": "online",
        services: [
            {
                dtHoraSoltcao: '20/11/2022 13:04',
                nrMatriculaColaborador: 9891,
                tpColaborador: 'S',
                situacao: "EM_ROTA"
            },
            {
                dtHoraSoltcao: '13/10/2022 11:04',
                nrMatriculaColaborador: 9891,
                tpColaborador: 'S',
                situacao: "PROGRAMADA"
            }
        ]
    },
    {
        "id": 2,
        "name": "Equipe 2",
        "color": "#5d6c76",
        "status": "offline",
        services: [
            {
                dtHoraSoltcao: '23/11/2022 08:01',
                nrMatriculaColaborador: 9891,
                tpColaborador: 'S',
                situacao: "EXECUTANDO"
            }
        ]
    },
    {
        "id": 3,
        "name": "Equipe 3",
        "color": "#735d76",
        "status": "deslogado",
        services: []
    }
]

export { teamsData };