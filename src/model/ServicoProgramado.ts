import { ServicoModel } from './Servico';

export interface ServicoProgramadoModel extends ServicoModel {
    situacao: string;
}