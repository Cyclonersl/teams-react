import { ServicoProgramadoModel } from './ServicoProgramado';
export interface EquipeModel {
    id: number;
    name: string;
    color: string;
    status: string;
    services?: ServicoProgramadoModel[];
}