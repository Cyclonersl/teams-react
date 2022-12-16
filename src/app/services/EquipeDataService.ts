import { EquipeModel } from './../../model/Equipe';
import http from '../api'
import { AxiosResponse } from 'axios';

class EquipeDataSerice {
    carregarEquipesPrestadora(prestadoraId: number) {
        return http.get<EquipeModel[]>(`/equipes?prestadoraId=${prestadoraId}`)
    }

    carregarServicosEquipe(equipeId: number) {
        return http.get(`/servicos?equipeId=${equipeId}`)
    }
}

export default new EquipeDataSerice();