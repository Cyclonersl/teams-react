import http from '../api'

class EquipeDataSerice {
    carregarEquipesPrestadora(prestadoraId: Number) {
        return http.get(`/equipes?prestadoraId=${prestadoraId}`)
    }
}

export default new EquipeDataSerice();