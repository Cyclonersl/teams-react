import http from '../api'

class EquipeDataSerice {
    carregarEquipesPrestadora(prestadoraId: number) {
        return http.get(`/equipes?prestadoraId=${prestadoraId}`)
    }

    carregarServicosEquipe(equipeId: number) {
        return http.get(`/servicos?equipeId=${equipeId}`)
    }
}

export default new EquipeDataSerice();