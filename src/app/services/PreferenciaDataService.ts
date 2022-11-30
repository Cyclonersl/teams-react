import http from '../api'

class PreferenciaDataServices {
    carregarPreferencias(prestadoraId: number) {
        return http.get(`/preferencias/${prestadoraId}`)
    }
}

export default new PreferenciaDataServices();