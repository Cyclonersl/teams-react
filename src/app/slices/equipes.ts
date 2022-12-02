import { RootState } from './../store';
import { PreferenciasModel } from './../../model/Preferencia';
import { EquipeModel, LocalizacaoEquipe } from './../../model/Equipe';
import { createSlice, createAsyncThunk, createEntityAdapter, EntityState, EntityId, PayloadAction } from '@reduxjs/toolkit'
import EquipeDataService from '../services/EquipeDataService';
import { ServicoProgramadoModel } from '../../model/ServicoProgramado';
import PreferenciaDataService from '../services/PreferenciaDataService';

interface StateProps extends EntityState<EquipeModel> {
    carregandoEquipes: boolean,
    preferencia?: PreferenciasModel,
    carregandoPreferencias: boolean,
    carregandoServicos: boolean,
    error?: string
}

//AsyncThunk
interface CarregarEquipeResponse {
    equipes: EquipeModel[];
    preferencias: PreferenciasModel
}

export const carregarEquipes = createAsyncThunk<CarregarEquipeResponse, number>("equipes/carregar", async (prestadoraId: number) => {
    const [equipes, preferencias] = await Promise.all([
        EquipeDataService.carregarEquipesPrestadora(prestadoraId),
        PreferenciaDataService.carregarPreferencias(prestadoraId),
    ])

    return ({
        equipes: equipes.data,
        preferencias: preferencias.data
    });
})

interface CarregarServicoResponse {
    equipeId: number;
    servicos: ServicoProgramadoModel[];
}

export const carregarServicos = createAsyncThunk<CarregarServicoResponse, number>("equipes/servicos", async (equipeId: number) => {
    const response = await EquipeDataService.carregarServicosEquipe(equipeId);
    return ({
        equipeId,
        servicos: response.data
    });
})

//EntityAdapter
export const equipeAdapter = createEntityAdapter<EquipeModel>({
    selectId: (equipe) => equipe.id,
})

//InitialState
const initialState: StateProps = {
    ...equipeAdapter.getInitialState(),
    carregandoEquipes: true,
    carregandoPreferencias: true,
    carregandoServicos: true
};

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
            equipeAdapter.updateOne(state, {
                id: payload.equipeId,
                changes: {
                    services: payload.servicos
                }
            })

            state.carregandoServicos = false;
        })
    },
    reducers: {
    }
})

export default equipesSlice.reducer;

//Selectors
export const selectEquipesIdsPreferencia = (state: RootState) => {
    if (!state.equipes.preferencia?.selecionada)
        return state.equipes.ids;

    const preferenciaData = state.equipes.preferencia.preferencias.find(preferencia => preferencia.nome === state.equipes.preferencia?.selecionada);

    if (!preferenciaData)
        return state.equipes.ids;

    return state.equipes.ids.filter(id => preferenciaData.equipes.includes(Number(id)));
}

export const selectServicosEquipe = (state: RootState, equipeId: Number) => {
    const servicos = equipeAdapter.getSelectors().selectById(state.equipes, equipeId as EntityId)?.services;

    if (!servicos)
        return [];

    return [...servicos].sort((a, b) => {
        if (a.situacao === "PROGRAMADA" && b.situacao === "PROGRAMADA")
            return a.ordem - b.ordem;

        if (a.situacao !== "PROGRAMADA")
            return -1;

        return 1;
    })
}