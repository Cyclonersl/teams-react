export interface ServicoModel {
    id: string;
    dtHoraSoltcao: string;
    nrMatriculaColaborador: number;
    tpColaborador: string;
    codigoServico: number;
    descricaoServico: string;
    agencia: string;
    distritoOperacional: string;
    endereco: string;
    equipeId: number;
    ordem: number;
    coordenadas: {
        lat: number,
        lng: number
    }
}

