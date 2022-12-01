import { PreferenciasModel } from './../../model/Preferencia';
import { EquipeModel } from './../../model/Equipe';
import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit'
import EquipeDataService from '../services/EquipeDataService';
import { ServicoProgramadoModel } from '../../model/ServicoProgramado';
import PreferenciaDataService from '../services/PreferenciaDataService';

interface statePros {
    ids: number[],
    entities: { [key: string]: EquipeModel },
    carregandoEquipes: boolean,
    preferencia?: PreferenciasModel,
    carregandoPreferencias: boolean,
    carregandoServicos: boolean,
    error?: string
}

const initialState: statePros = {
    ids: [],
    entities: {},
    carregandoEquipes: true,
    carregandoPreferencias: true,
    carregandoServicos: true
};


export const carregarEquipes = createAsyncThunk("equipes/carregar", async (prestadoraId: number) => {
    const [equipes, preferencias] = await Promise.all([
        EquipeDataService.carregarEquipesPrestadora(prestadoraId),
        PreferenciaDataService.carregarPreferencias(prestadoraId),
    ])

    return ({
        equipes: equipes.data,
        preferencias: preferencias.data
    }) as {
        equipes: EquipeModel[]
        preferencias: PreferenciasModel
    }
})

export const carregarServicos = createAsyncThunk("equipes/servicos", async (equipeId: number) => {
    const response = await EquipeDataService.carregarServicosEquipe(equipeId);
    return (response.data) as ServicoProgramadoModel[];
})

const equipeAdapter = createEntityAdapter<EquipeModel>({
    selectId: (equipe) => equipe.id,
})

const equipesSlice = createSlice({
    name: 'equipes',
    initialState,
    extraReducers: (builder) => {

        builder.addCase(carregarEquipes.pending, (state, action) => {
            state.carregandoEquipes = true;
            state.carregandoPreferencias = true;
            state.carregandoServicos = true;
        })

        builder.addCase(carregarEquipes.fulfilled, (state, { payload }) => {
            equipeAdapter.addMany(state, payload.equipes);

            state.carregandoEquipes = false;
            state.carregandoPreferencias = false;
            state.preferencia = payload.preferencias;
        })

        builder.addCase(carregarServicos.fulfilled, (state, { payload }) => {
            const lista: { [key: string]: ServicoProgramadoModel[] } = payload.reduce((lista: { [key: string]: ServicoProgramadoModel[] }, servico) => {
                if (!lista[servico.equipeId])
                    lista[servico.equipeId] = [];

                lista[servico.equipeId].push(servico);
                return lista;
            }, {});

            Object.keys(lista).forEach(key => {
                state.entities[key].services = lista[key];
            });

            state.carregandoServicos = false;
        })
    },
    reducers: {

    }
})

export default equipesSlice.reducer;