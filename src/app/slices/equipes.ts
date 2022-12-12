import { createSlice, createAsyncThunk, createEntityAdapter, EntityState, EntityId, PayloadAction } from '@reduxjs/toolkit'
import { createSelector } from 'reselect'
import { RootState } from './../store';
import { SituacaoEquipeMessage } from './../../model/SituacaoEquipeMessage';
import { PreferenciasModel } from './../../model/Preferencia';
import { EquipeModel } from './../../model/Equipe';
import EquipeDataService from '../services/EquipeDataService';
import { ServicoProgramadoModel } from '../../model/ServicoProgramado';
import PreferenciaDataService from '../services/PreferenciaDataService';

interface StateProps extends EntityState<EquipeModel> {
    carregandoEquipes: boolean,
    preferencia?: PreferenciasModel,
    carregandoPreferencias: boolean,
    carregandoServicos: boolean,
    error?: string
    equipeSelecionada?: number
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
            state.preferencia = payload.preferencias;

            state.carregandoEquipes = false;
            state.carregandoPreferencias = false;
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
        updateSituacaoEquipe: (state, action: PayloadAction<SituacaoEquipeMessage>) => {
            equipeAdapter.updateOne(state, {
                id: action.payload.equipe_id,
                changes: {
                    status: action.payload.situacao === 4 ? 'online'
                        : action.payload.situacao === 5 ?
                            'offline' : 'deslogado'
                }
            })
        },
        selecionaEquipe: (state, action: PayloadAction<number | undefined>) => {
            state.equipeSelecionada = action.payload;
        }
    }
})


export default equipesSlice.reducer;
export const { updateSituacaoEquipe, selecionaEquipe } = equipesSlice.actions

//Selectors
const preferenciaSelecionada = (state: RootState) => state.equipes.preferencia?.selecionada === undefined ? null : state.equipes.preferencia.preferencias.find(preferencia => preferencia.nome === state.equipes.preferencia?.selecionada)
const allIds = (state: RootState) => state.equipes.ids

export const selectEquipesIdsPreferencia = createSelector([preferenciaSelecionada, allIds],
    (preferenciaSelecionada, allIds) => {
        if (!preferenciaSelecionada)
            return allIds;

        return allIds.filter(id => preferenciaSelecionada.equipes.includes(Number(id)));
    })


export const selectQuantidadesEquipesSelecionadas = createSelector([selectEquipesIdsPreferencia, allIds],
    (selectEquipesIdsPreferencia, allIds) => {
        if (selectEquipesIdsPreferencia.length === allIds.length)
            return null;

        return selectEquipesIdsPreferencia.length + ' / ' + allIds.length;
    })

export const selectServicosEquipe = (state: RootState, equipeId: Number) => {
    const servicos = equipeAdapter.getSelectors().selectById(state.equipes, equipeId as EntityId)?.services;

    if (!servicos)
        return [];

    return servicos
}

export const selectEquipeSelecionada = (state: RootState) => !state.equipes.equipeSelecionada ? null : state.equipes.entities[state.equipes.equipeSelecionada];