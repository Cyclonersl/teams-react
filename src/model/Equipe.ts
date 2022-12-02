import { ServicoProgramadoModel } from './ServicoProgramado';
export interface EquipeModel {
    id: number;
    name: string;
    color: string;
    status: string;
    services?: ServicoProgramadoModel[];
}

export interface LocalizacaoEquipe {
    id: number,
    lat: number,
    lng: number
}