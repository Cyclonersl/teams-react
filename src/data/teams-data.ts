import { EquipeModel } from './../model/Equipe';

const teamsData: EquipeModel[] = [
    {
        "id": 1,
        "name": "EquipeModel 1",
        "color": "#c2e1f6",
        "status": "online",
        services: [
            {
                dtHoraSoltcao: '20/11/2022 13:04',
                nrMatriculaColaborador: 9891,
                tpColaborador: 'S',
                situacao: "EM_ROTA",
                codigoServico: 3202,
                descricaoServico: "LA DESLOC. CAV. DN QUALQUER I.C.",
                agencia: "RIO DO SUL",
                distritoOperacional: 'RIO DO SUL',
                endereco: "RUA GEORG LUCAS - 83"
            },
            {
                dtHoraSoltcao: '13/10/2022 11:04',
                nrMatriculaColaborador: 9891,
                tpColaborador: 'S',
                situacao: "PROGRAMADA",
                codigoServico: 1038,
                descricaoServico: "AC VER. LEITURA",
                agencia: "FLORIANÓPOLIS COSTA NORTE",
                distritoOperacional: 'CANASVIEIRAS',
                endereco: "RUA ARARAS - 193"
            }
        ]
    },
    {
        "id": 2,
        "name": "EquipeModel 2",
        "color": "#5d6c76",
        "status": "offline",
        services: [
            {
                dtHoraSoltcao: '23/11/2022 08:01',
                nrMatriculaColaborador: 9891,
                tpColaborador: 'S',
                situacao: "EXECUTANDO",
                codigoServico: 7322,
                descricaoServico: "ET - MANUTENÇÃO EM SISTEMA DE TELEMETRIA E SUPERV.",
                agencia: "BIGUAÇU",
                distritoOperacional: 'BIGUAÇU',
                endereco: "AV. TORRES"
            }
        ]
    },
    {
        "id": 3,
        "name": "EquipeModel 3",
        "color": "#735d76",
        "status": "deslogado",
        services: []
    }
]

export { teamsData };