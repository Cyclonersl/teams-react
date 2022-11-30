export interface PreferenciasModel {
    id: number;
    prestadora: number;
    selecionada: string;
    preferencias: PreferenciaModel[]
}

export interface PreferenciaModel {
    nome: string;
    equipes: number[];
}