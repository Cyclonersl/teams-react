import { ServicoProgramadoModel } from './Servico';
export interface EquipeModel {
    id: number;
    name: string;
    color: string;
    status: string;
    services?: ServicoProgramadoModel[];
}