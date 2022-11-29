import http from '../api'

class PrestadoraDataSerice {
    carregar() {
        return http.get(`/prestadoras`)
    }
}

export default new PrestadoraDataSerice();